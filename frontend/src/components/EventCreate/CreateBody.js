import { useState } from "react"


function CreateBody() {
    const [step, setStep] = useState(1)


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
                return <CreateStep1 />;
            case (step === 2):
                return <CreateStep2 />;
            case (step === 3):
                return <CreateStep3 />;
            case (step === 4):
                return <CreateStep4 />;
        }
    }

    return (
        <>
            <div className="create-body-layout">
                <div className='container create-container'>
                    <div className='create-nav'>
                        <div className='event-create-step'><i className="fa-solid fa-circle-1"></i>Basic</div>
                        <div className='event-create-step'><span><i className="fa-solid fa-circle-2"></i></span>Lineup</div>
                        <div className='event-create-step'><span><i className="fa-solid fa-circle-3"></i></span>Details</div>
                        <div ><span><i className="fa-solid fa-circle-4"></i></span>Promotional</div>
                    </div>
                    <div className='create-input'>
                        <div>
                            {renderStep}
                        </div>
                        <div>
                            <div className="create-buttons">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default CreateBody
