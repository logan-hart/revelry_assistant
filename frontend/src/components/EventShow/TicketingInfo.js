import { useState } from "react"
import { Link } from "react-router-dom"

function TicketingInfo({event}){ 
    const [ticketNum, setTicketNum] = useState(1)
    const [max, setMax] = useState(false)
    const [buyLimit, setBuyLimit] = useState(false)
    let soldOut = false

    if (event.availableTickets - event.ticketsSold === 0) soldOut = true

    function formatCost(cost) {
        return '$' +`${cost * ticketNum}` + '.00'
    }

    function handleTicketIncrease(e){
        if (ticketNum < event.availableTickets - event.ticketsSold && ticketNum < 6){
            setTicketNum(prevNum => prevNum + 1)
        } else if (ticketNum === 6) {
            setBuyLimit(true)
        } else {
            setMax(true)
        }
    }

    function handleTicketDecrease(e){
        if (ticketNum > 1){
            setMax(false)
            setBuyLimit(false)
            setTicketNum(prevNum => prevNum - 1)
        }
    }
    
    return (
        <>
            <div>
                <div className="medium-text red-text">/ RA TICKETS</div>
                <div className="show-ticket-wrapper">
                    <div className="event-show-divider">
                        <div className="form-label dark-text">Tickets including RA fee <span> (?) </span></div>  
                        <div className='form-label dark-text'>USD</div>
                    </div>
                    {!soldOut ?
                        (<>
                            <div className="ticket-grid">
                                <div>General Admission</div>
                                <div>{formatCost(event.cost)}</div>
                            </div>
                            {/* <div className='form-label dark-text event-show-divider'>Ticket sales end on (End Sales Date)</div> */}
                        </>
                    ) : (
                        <>
                            <div className="sold-out-ticket-grid">
                                <div>General Admission</div>
                                <div>{formatCost(event.cost)}</div>
                            </div>
                            {/* <div className='form-label dark-text event-show-divider'>Ticket sales end on (End Sales Date)</div> */}
                        </>
                    )}
                </div>
                {!soldOut ? 
                    <div className="show-action-buy event-show-divider">
                        <div className='event-show-ticket-buttons'>
                            <button onClick={handleTicketDecrease} className='circular-button transparent-button'>&minus;</button>
                            <div className='medium-text white-text'>{ticketNum}</div>
                            <button onClick={handleTicketIncrease} className='circular-button transparent-button'>+</button>
                        </div>
                        {max ? 
                            <div className="white-text">
                                There are only {event.availableTickets-event.ticketsSold} tickets left for this event!
                            </div>
                        : null}
                        {buyLimit? 
                            <div className="red-text top-spacer">
                                * You may only purchase 6 tickets for this event *
                            </div>
                        : null}
                        <div>
                            <Link to={`/events/${event.id}/buyTickets?ticketNum=${ticketNum}&eventId=${event.id}`} className='button red-button buy-button'>
                                <i className="fa-solid fa-ticket ticket-icon-spacer"></i>Buy Tickets
                            </Link>
                        </div>
                    </div>
                : <div className="sold-out">* This event is sold out * </div>}
            </div>
        </>
    )
}

export default TicketingInfo