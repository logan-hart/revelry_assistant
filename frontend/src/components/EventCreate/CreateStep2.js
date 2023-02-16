function CreateStep2 ({lineup, setLineup, genres, setGenres}) {

    const genreOptions = ['Acid', 'Afrobeat', 'Baile Funk', 'Bass', 'Breakcore', 'Club', 'Dancehall', 'Deep House', 'Dembow', 'Disco', 'Drum & Bass', 'Dub', 'Electro', 'Experimental', 'Funk/Soul', 'Hip-Hop', 'House', 'Italo Disco', 'Jungle', 'Latin Bass', 'Minimal', 'Neo Perreo', 'Pop', 'Progressive House', 'Reggaeton', 'R&B', 'Tech House', 'Techno', 'Trance']

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
                            <select id="genre-dropdown" onChange={(e) => setGenres(e.target.value)}>
                                <option value={genres} className='dropdown'></option>
                                    {genreOptions.map((genre) => <option key={genre} value={genre}>{genre}
                                </option>)}
                            </select>
                            <select id="genre-dropdown" onChange={(e) => setGenres(e.target.value)}>
                                <option value={genres} className='dropdown'></option>
                                    {genreOptions.map((genre) => <option key={genre} value={genre}>{genre}
                                </option>)}
                            </select>
                        <div className='form-label errors'>possible errors {genres}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateStep2