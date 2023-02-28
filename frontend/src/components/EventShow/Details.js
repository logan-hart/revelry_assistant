function Details(props) {

    return (
        <>
            <div className='container details-container'>
                <div className="event-show-lineup">
                    <div className="medium-text red-text details-header">/ LINEUP</div>
                    
                    <div className='medium-text white-text details-lineup'> 
                        {(props.event.lineup).map((artist) => 
                            <li key={artist}>{artist}</li>
                        )}
                    </div>
                    <div className='form-label dark-text'>Genre</div>
                    <div className="genre-container form-label">
                        {props.event.genres.map((genre) => 
                            <li key={genre} className='genre-tag'>{genre}</li>
                        )}
                    </div>

  
                </div>
                <div className="details-divider">
                    <div className="details-show-info">
                            <div>
                                <div className="white-text"><p className="event-show-details">{props.event.details}</p></div>
                            </div>
                            <div className="form-label dark-text event-show-double-spacer">
                                <div className="event-show-spacer">Event Admin</div>
                                <div className="white-text">Ron Like Hell</div>
                            </div>
                            <div className="form-label dark-text event-show-double-spacer">
                                <div className="event-show-spacer">Min. age</div>
                                <div className="white-text">{props.event.ageMinimum + "+"} </div>
                            </div>
                            <div className="form-label dark-text event-show-double-spacer">
                                <div className="event-show-spacer">Cost</div>
                                <div className="white-text">{props.event.cost}</div>
                            </div>
                    </div>
                    <div className="event-show-Poster">
                        <img id="event-large-poster" src={props.event.images}/>
                    </div>
                </div>


            </div>
        </>
    )

}

export default Details