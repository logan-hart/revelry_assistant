import './EventShow.css'

function BasicInfo ({name, lineup, startDate, ticketsSold, venue, startTime, endTime}){
    
    const formatTime = (time) =>{
        return time.slice(11, 16)
    }

    let lineupList =() =>  {
        if (lineup) return lineup.join(' / ')
    } 

    return (
        <div className="event-show-basic-info">
                        <div>
                            <div className="small-text white-text"> <img id="event-show-small-flag-icon" src="https://upload.wikimedia.org/wikipedia/commons/8/88/United-states_flag_icon_round.svg"/> New York  </div>
                            <div className="medium-text white-text"> {name}: {lineupList()}</div>
                        </div>
                        <div className="container event-show-details-container">
                            <div>
                                <div className="form-label dark-text">Venu</div>
                                <div className="medium-text">{venue}</div>
                                <div className="small-text">{venue}</div>
                            </div>
                            <div>
                                <div className="form-label dark-text">Date</div>
                                <div className="medium-text">{startDate}</div>
                                <div className="small-text">{formatTime(startTime)} - {formatTime(endTime)}</div>
                            </div>
                            <div>
                                <div className="form-label dark-text">Promoter</div>
                                <div className="medium-text"></div>
                            </div>
                            <div>
                                <div className="form-label dark-text">Attending</div>
                                <div className='red-text medium-text'>{ticketsSold}</div>

                            </div>
                            <div>
                                <button className="button transparent-button" id='event-show-interested'>Interested</button>
                            </div>
                        </div>
                    </div>
    )
}

export default BasicInfo