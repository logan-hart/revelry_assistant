import { useState } from "react"
import { Link } from "react-router-dom"

function TicketingInfo({event}){ 
    const [ticketNum, setTicketNum] = useState(1)
    const [max, setMax] = useState(false)

    function formatCost(cost) {
        return '$' +`${cost * ticketNum}` + '.00'
    }

    function handleTicketIncrease(e){
        if (ticketNum < event.availableTickets-event.ticketsSold){
            setTicketNum(prevNum => prevNum + 1)
        }
        else {
            setMax(true)
        }
    }

    function handleTicketDecrease(e){
        if (ticketNum > 1){
            setMax(false)
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
                    <div className="ticket-grid">
                        <div>EarlyBird</div>
                        <div>{formatCost(event.cost)}</div>
                    </div>
                    <div className='form-label dark-text event-show-divider'>Ticket sales end on (End Sales Date)</div>


                </div>
                <div className="show-action-buy event-show-divider">
                    <div className='event-show-ticket-buttons'>
                        <button onClick={handleTicketDecrease} className='circular-button transparent-button'>&minus;</button>
                        <div className='medium-text white-text'>{ticketNum}</div>
                        <button onClick={handleTicketIncrease} className='circular-button transparent-button'>+</button>
                    </div>
                    {max ? 
                        <div className="white-text">
                            There are only {event.availableTickets-event.ticketsSold} left for this event!
                        </div>
                    : null}
                    <div>
                        <Link to={`/events/${event.id}/buyTickets?ticketNum=${ticketNum}&eventId=${event.id}`} className='button red-button buy-button'>
                            <i className="fa-solid fa-ticket ticket-icon-spacer"></i>Buy Tickets
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TicketingInfo