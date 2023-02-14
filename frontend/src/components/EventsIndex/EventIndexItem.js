import { Link } from "react-router-dom"

function EventIndexItem({event}){
    const {id, name, lineup, startDate, photoUrl, ticketsSold, venue} = event

    let lineupList =() =>  {
        if (lineup) return lineup.join(' / ')
    } 

    return (
        <li>
            <div className='event-list-container'>
                <Link to={`/events/${id}`}>
                    <div className='img-div'>
                        <img id="small-event-poster"src={photoUrl}/>
                    </div>
                </Link>
                <div className='info-div'>
                    <Link className="link white-text " to={`/events/${id}`}>
                        <div className="event-name">
                            {name}: {lineupList()}
                        </div>
                    </Link>
                    <div className="event-promoters white-text">
                        promoters
                    </div>
                    <div className='event-info-line'>
                        <div className='group'>
                            <div><i className="fa-solid fa-location-dot red-text"></i><span className="white-text"> {venue}</span></div>
                            <div className="event-spacer"></div>
                            <div><i className="fa-solid fa-ticket dark-text"></i><span className="dark-text"> RA Tickets</span></div>
                        </div>
                        <div><i className="fa-regular fa-user red-text"></i><span className="white-text"> {ticketsSold}</span></div>
                    </div>

                </div>
            </div>

        </li>
    )
}

export default EventIndexItem