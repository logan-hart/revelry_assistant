function CreateStep3 ({details, setDetails, cost, setCost, ageMinimum, setAgeMinimum}) {

    const ageOptions = ['18+', '19+', '20+', '21+']

    return (
        <>
           <div>
                <div className="create-category">
                    <div className="red-text medium-text create-subheader"> / DETAILS</div>
                    <div>
                        <div className='form-label'>Event description</div>
                        <textarea className="full-input" onChange={(e)=> setDetails(e.target.value) } value={details}></textarea>
                        <div className='form-label errors'>possible errors {details}</div>
                    </div>
                </div>
                <div>
                    <div className="red-text medium-text create-subheader"> / OTHER</div>
                    <div>                    
                        <div>
                            <div className='form-label'> Cost</div>
                            <input className='form-input half-input' onChange={(e)=> setCost(e.target.value) } value={cost}></input>
                            <div className='form-label errors'>possible errors {cost}</div>
                        </div>
                        <div>
                            <div className='form-label'> Age</div>
                            <select id="age-dropdown" onChange={(e) => setAgeMinimum(e.target.value)}>
                                <option value={ageMinimum} className='dropdown'></option>
                                    {ageOptions.map((age) => <option key={age} value={age}>{age}
                                </option>)}
                            </select>
                            <div className='form-label errors'>possible errors {ageMinimum}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateStep3