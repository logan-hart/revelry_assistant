import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"
import ButtonNext from "./ButtonNext"
import ButtonBack from "./ButtonBack"
import CreateSubmit from "./ButtonSubmit"
import * as eventActions from "../../store/events";



function CreateBody({event, type}) {
    const dispatch = useDispatch()
    const [step, setStep] = useState(1)
    const [name, setName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endDate, setEndDate] = useState('')
    const [endTime, setEndTime] = useState('')
    const [venue, setVenue] = useState('')
    const [lineup, setLineup] = useState([])
    const [genres, setGenres] = useState([])
    const [details, setDetails] = useState('')
    const [cost, setCost] = useState('')
    const [ageMinimum, setAgeMinimum] = useState('')
    const [promoter, setPromoter] = useState('')
    const [images, setImages] = useState('')
    const [links, setLinks] = useState('')
    const [media, setMedia] = useState('')
    const [errors, setErrors] = useState([])
    
    useEffect(() => {
        if (event) {
            setName(event.name)
            setStartDate(event.startDate)
            setStartTime(event.startTime)
            setEndDate(event.endDate)
            setEndTime(event.endTime)
            setVenue(event.venue)
            setLineup(event.lineup)
            setGenres(event.genres)
            setDetails(event.details)
            setCost(event.cost)
            setAgeMinimum(event.ageMinimum)
            setPromoter(event.promoter)
            setImages(event.images)
            setLinks(event.links)
            setMedia(event.media)
        }
    }, [event])


    function handleNextStep(e) {
        e.preventDefault()
        if(step < 4){
            setStep(prevStep => prevStep +1)
        }
    }

    function handleBack(e) {
        e.preventDefault()
        if (step > 1){
            setStep(prevStep => prevStep - 1)
        }
    }

    function renderStep(step) {
        switch (step) {
            case 1:
                return <Step1 name={name} setName={setName} venue={venue} setVenue={setVenue}/>;
            case 2:
                return <Step2 lineup={lineup} setLineup={setLineup} genres={genres} setGenres={setGenres}/>;
            case 3:
                return <Step3 details={details} setDetails={setDetails} cost={cost} setCost={setCost} ageMinimum={ageMinimum} setAgeMinimum={setAgeMinimum}/>;
            case 4:
                return <Step4 promoter={promoter} setPromoter={setPromoter} images={images} setImages={setImages} links={links} setLinks={setLinks} media={media} setMedia={setMedia}/>;
        }
    }

    function renderButtons(step) {
        switch (step){
            case 1:
                return (
                    <>
                        <div>
                            <ButtonNext onClick={handleNextStep} />
                        </div>
                    </>
                );
            case 2:
                return(
                    <>
                        <div>
                            <ButtonBack onClick={handleBack}/>  
                        </div>
                        <div className="right-button-spacer">
                            <ButtonNext onClick={handleNextStep}/>
                        </div>
                    </>
                );
            case 3:
                return(
                    <>
                        <div>
                            <ButtonBack onClick={handleBack}/>  
                        </div>
                        <div className="right-button-spacer">
                            <ButtonNext onClick={handleNextStep}/>
                        </div>
                    </>
                );
            case 4:
                return (
                    <>
                        <div>
                            <ButtonBack onClick={handleBack}/> 
                        </div>
                        <div className="right-button-spacer">
                            <CreateSubmit onClick={handleSubmit} type={type}/>
                        </div>
                    </>
                );
        }
    }

    function handleSubmit(e){
        e.preventDefault()

        if (type === 'Create'){
            
            setErrors([]);
            dispatch(eventActions.createEvent({ name, startDate, startTime, endDate, endTime, venue, lineup, genres, details, cost, ageMinimum, promoter, images, links, media}))
                .catch(async (res) => {
                let data;
                try {
                data = await res.clone().json();
                } catch {
                data = await res.text();
                }
                
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });

        } else {
            setErrors([]);
            dispatch(eventActions.updateEvent({ name, startDate, startTime, endDate, endTime, venue, lineup, genres, details, cost, ageMinimum, promoter, images, links, media}))
                .catch(async (res) => {
                let data;
                try {
                data = await res.clone().json();
                } catch {
                data = await res.text();
                }
                
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });

        }
          
    }

    return (
        <>
            <div className="create-body-layout">
                <div className='container create-container'>
                    <div className='create-nav'>
                        <button onClick={(e) => setStep(1) }><div className='event-create-step link'><span><i className="fa-solid fa-1"></i></span> Basic</div></button>
                        <button onClick={(e) => setStep(2) }><div className='event-create-step link'><span><i className="fa-solid fa-2"></i></span> Lineup</div></button>
                        <button onClick={(e) => setStep(3) }><div className='event-create-step link'><span><i className="fa-solid fa-3"></i></span> Details</div></button>
                        <button onClick={(e) => setStep(4) }><div className='link'><span><i className="fa-solid fa-4"></i></span> Promotional</div></button>
                    </div>
                    <div className='create-input'>
                        <form>
                            <div className="step">
                                {renderStep(step)}
                            </div>
                            <div>
                                <div className="create-buttons">
                                    {renderButtons(step)}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default CreateBody
