import { useState } from "react"

function TicketingInfo({event}){ 
    const [ticketNum, setTicketNum] = useState(1)
    let availableTickets = event.availableTickets
    availableTickets ||= 10

    function formatCost(cost) {
        return '$' +`${cost * ticketNum}` + '.00'
    }

    function handleTicketIncrease(e){
        if (ticketNum < availableTickets){
            setTicketNum(prevNum => prevNum + 1)
        }
    }

    function handleTicketDecrease(e){
        if (ticketNum > 1){
            setTicketNum(prevNum => prevNum - 1)
        }
    }
    
    return (
        <>
            <div>
                <div className="medium-text red-text">/ RA TICKETS</div>
                <div className="show-ticket-wrapper">
                    <div className="event-show-divider">
                        <div className="form-label">Tickets including RA fee <span> (?) </span></div>  
                        <div className='form-label'>USD</div>
                    </div>
                    <div className="ticket-grid">
                        <div>EarlyBird</div>
                        <div>{formatCost(event.cost)}</div>
                    </div>
                    <div className='form-label event-show-divider'>Ticket sales end on (End Sales Date)</div>


                </div>
                <div className="show-action-buy event-show-divider">
                    <div className='event-show-ticket-buttons'>
                        <button onClick={handleTicketDecrease} className='circular-button transparent-button'>&minus;</button>
                        <div className='medium-text white-text'>{ticketNum}</div>
                        <button onClick={handleTicketIncrease} className='circular-button transparent-button'>+</button>
                    </div>
                    <div>
                        <button id="buy-button" className='button red-button'><i className="fa-solid fa-ticket ticket-icon-spacer"></i>Buy Tickets</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TicketingInfo