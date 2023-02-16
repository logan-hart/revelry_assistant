import { useState } from "react"
import { Dispatch } from "react"
import CreateStep1 from "./CreateStep1"
import CreateStep2 from "./CreateStep2"
import CreateStep3 from "./CreateStep3"
import CreateStep4 from "./CreateStep4"
import CreateNext from "./CreateNext"
import CreateBack from "./CreateBack"
import CreateSubmit from "./CreateSubmit"
import { useDispatch } from "react-redux"
import * as eventActions from "../../store/events";


function CreateBody() {
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
                return <CreateStep1 name={name} setName={setName} venue={venue} setVenue={setVenue}/>;
            case 2:
                return <CreateStep2 lineup={lineup} setLineup={setLineup} genres={genres} setGenres={setGenres}/>;
            case 3:
                return <CreateStep3 details={details} setDetails={setDetails} cost={cost} setCost={setCost} ageMinimum={ageMinimum} setAgeMinimum={setAgeMinimum}/>;
            case 4:
                return <CreateStep4 promoter={promoter} setPromoter={setPromoter} images={images} setImages={setImages} links={links} setLinks={setLinks} media={media} setMedia={setMedia}/>;
        }
    }

    function renderButtons(step) {
        switch (step){
            case 1:
                return (
                    <>
                        <div>
                            <CreateNext onClick={handleNextStep} />
                        </div>
                    </>
                );
            case 2:
                return(
                    <>
                        <div>
                            <CreateBack onClick={handleBack}/>  
                        </div>
                        <div className="right-button-spacer">
                            <CreateNext onClick={handleNextStep}/>
                        </div>
                    </>
                );
            case 3:
                return(
                    <>
                        <div>
                            <CreateBack onClick={handleBack}/>  
                        </div>
                        <div className="right-button-spacer">
                            <CreateNext onClick={handleNextStep}/>
                        </div>
                    </>
                );
            case 4:
                return (
                    <>
                        <div>
                            <CreateBack onClick={handleBack}/> 
                        </div>
                        <div className="right-button-spacer">
                            <CreateSubmit onClick={handleSubmit}/>
                        </div>
                    </>
                );
        }
    }

    function handleSubmit(e){
        e.preventDefault()

        setErrors([]);
          return dispatch(eventActions.createEvent({ name, startDate, startTime, endDate, endTime, venue, lineup, genres, details, cost, ageMinimum, promoter, images, links, media}))
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
