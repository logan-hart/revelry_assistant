function EventIndexItem({event}){
    const {name, lineup, startDate} = event

    let lineupList =() =>  {
        if (lineup) return lineup.join('/ ')
    } 

    return (
        <li>
            <div className='event-list-container'>
                <div className='img-div'>

                </div>
                <div className='info-div'>
                    <div className="white-text">
                        {name}: {lineupList()}
                    </div>
                    <div className="white-text">
                        promoters
                    </div>
                    <div>
                        <i className="fa-solid fa-location-dot red-text"></i><span className="white-text">venue name</span>
                        <i className="fa-solid fa-ticket dark-text"></i><span className="dark-text">RA Tickets</span>
                        <i className="fa-regular fa-user red-text"></i><span className="white-text">tickets sold</span>
                    </div>

                </div>
            </div>

        </li>
    )
}

export default EventIndexItem