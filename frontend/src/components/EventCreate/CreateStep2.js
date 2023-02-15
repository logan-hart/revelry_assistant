function CreateStep2 ({lineup, setLineup, genres, setGenres}) {

    return (
        <>
            <div>
                <div className="create-category">
                    <div className="red-text medium-text create-subheader"> / LINEUP</div>
                    <div>
                        <div className='form-label'>Lineup<span className="red-text">*</span></div>
                        <textarea className="full-input" onChange={(e)=> setLineup(e.target.value) } value={lineup}></textarea>
                        <div className='form-label errors'>possible errors {lineup}</div>
                    </div>
                </div>
                <div>
                    <div className="red-text medium-text create-subheader"> / GENRES</div>
                    <div>                    
                        <div className='form-label'>Give attendees a flavour of the genres that will be played at the event.</div>
                        <div className='form-label'> Genres</div>
                        <input className="form-input half-input" onChange={(e)=> setGenres(e.target.value) } value={genres}></input>
                        <input className='form-input half-input'></input>
                        <div className='form-label errors'>possible errors {genres}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateStep2