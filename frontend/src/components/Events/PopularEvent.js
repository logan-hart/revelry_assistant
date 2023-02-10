
function PopularEvent({popEvent}) {
    const {name, lineup, startDate, photoUrl, ticketsSold, venue} = popEvent
    
    let lineupList =() =>  {
        if (lineup) return lineup.join('/ ')
    } 

    return (
        <div className="popular-event-container">
            <div className='popular-img'><img id="large-event-poster"src={photoUrl}/></div>
            <div className='popular-date'><span className="white-text">{startDate}</span></div>
            <div className='popular-title'><span className="white-text">{name}: {lineupList()}</span></div>
            <div className='popular-location'><i className="fa-solid fa-location-dot red-text"></i><span className="white-text">{venue}</span></div>
            <div className='popular-attending'><i className="fa-regular fa-user red-text"></i><span className="white-text">{ticketsSold}</span></div>
        </div>
    )
}

export default PopularEvent
