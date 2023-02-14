import { Link } from "react-router-dom"

function PopularEvent({popEvent}) {
    const {id, name, lineup, startDate, photoUrl, ticketsSold, venue} = popEvent
    
    let lineupList =() =>  {
        if (lineup) return lineup.join(' / ')
    } 
      

    return (
        <div className="popular-event-container">
            <Link to={`/events/${id}`}><div className='popular-img'><img id="large-event-poster"src={photoUrl}/></div></Link>
            <div className='popular-date'><span className="dark-text">{startDate}</span></div>
            <Link className="white-text link" to={`/events/${id}`}><div className=' popular-title'>{name}: {lineupList()}</div></Link>
            <div className='popular-location'><i className="fa-solid fa-location-dot red-text"></i><span className="white-text"> {venue}</span></div>
            <div className='popular-attending'><i className="fa-regular fa-user red-text"></i><span className="white-text">{ticketsSold}</span></div>
        </div>
    )
}

export default PopularEvent
