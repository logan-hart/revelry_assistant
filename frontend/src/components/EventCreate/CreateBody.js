import { useState } from "react"
import CreateStep1 from "./CreateStep1"
import CreateStep2 from "./CreateStep2"
import CreateStep3 from "./CreateStep3"
import CreateStep4 from "./CreateStep4"
import CreateNext from "./CreateNext"
import CreateBack from "./CreateBack"
import CreateSubmit from "./CreateSubmit"


function CreateBody() {
    const [step, setStep] = useState(1)
    const [name, setName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [starttime, setStartTime] = useState('')
    const [endDate, setEndDate] = useState('')
    const [venue, setVenue] = useState('')
    const [lineup, setLineup] = useState([])
    const [genres, setGenres] = useState([])
    const [details, setDetails] = useState('')
    const [cost, setCost] = useState(0)
    const [ageMinimum, setAgeMinimum] = useState(18)
    const [promoter, setPromoter] = useState('')
    const [images, setImages] = useState('')
    const [links, setLinks] = useState('')
    const [media, setMedia] = useState('')


    function handleNextStep(e) {
        if(step < 4){
            setStep(prevStep => prevStep +1)
        }
    }

    function handleBack(e) {
        if (step > 1){
            setStep(prevStep = prevStep - 1)
        }
    }

    function renderStep() {
        switch (step) {
            case (step === 1):
                <CreateStep1 />;
            case (step === 2):
                <CreateStep2 />;
            case (step === 3):
                <CreateStep3 />;
            case (step === 4):
                <CreateStep4 />;
        }
    }

    function renderButtons() {
        switch (step){
            case (step === 1):
                return (
                    <>
                        <div>
                            <CreateNext />
                        </div>
                    </>
                );
            case (step === 2 || step === 3):
                return(
                    <>
                        <div>
                            <CreateBack />  
                        </div>
                        <div>
                            <CreateNext />
                        </div>
                    </>
                );
            case (step === 4):
                return (
                    <>
                        <div>
                            <CreateBack /> 
                        </div>
                        <div>
                            <CreateSubmit/>
                        </div>
                    </>
                );
        }
    }

    function handleSubmit(){

    }

    return (
        <>
            <div className="create-body-layout">
                <div className='container create-container'>
                    <div className='create-nav'>
                        <div className='event-create-step'><span><i className="fa-solid fa-1 link"></i></span>Basic</div>
                        <div className='event-create-step'><span><i className="fa-solid fa-2 link"></i></span>Lineup</div>
                        <div className='event-create-step'><span><i className="fa-solid fa-3 link"></i></span>Details</div>
                        <div ><span><i className="fa-solid fa-4"></i></span>Promotional</div>
                    </div>
                    <div className='create-input'>
                        <form onSubmit={handleSubmit()}>
                            <div>
                                {renderStep()}
                            </div>

                            <div>
                                <div className="create-buttons">
                                    {renderButtons}
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
