import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getEvent } from '../../store/events';
import { createTicket } from '../../store/tickets';
import "./BuyTickets.css"

export default function BuyTickets() {
    const dispatch = useDispatch()
    const location = useLocation();
    const history = useHistory()
    const params = new URLSearchParams(location.search);
    const user = useSelector(state => state.session.user)
    const eventId = params.get('eventId');
    const event = useSelector(getEvent(eventId))
    const [ticketNum, setTicketNum] = useState(parseInt(params.get('ticketNum')));
    const [max, setMax] = useState(false)
    const [buyLimit, setBuyLimit] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    function formatCost(cost) {
        return '$' +`${cost}` + '.00'
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

    function handleCheckout(e) {
        e.preventDefault()
        let userId = user.id
        let numTickets = ticketNum
        const ticket= { userId, eventId, numTickets };
        dispatch(createTicket(ticket))
        .then(() => {
            history.push(`/users/${user.id}/tickets`)
        })
    }

    return (
        <>
        <div className="ticket-header-layout">
            <div className="container">
                <div className="ticket-header big-text">Basket</div>
            </div>
        </div>
        <div className="ticket-body-layout">
            <div className="container ticket-cells">   
                <div className="buy-ticket-info">
                    <div className='ticket-row'>
                        <div className='ticket-deets'>
                            <div className="buy-ticket-price-total">{event.name} at {event.venue}</div>
                            <div>{event.startDate}</div>
                        </div>
                        <div className="buy-number-buttons">
                            <div className="form-label">Quantity</div>
                            <div className='event-show-ticket-buttons ticket-correction'>
                                    <button onClick={handleTicketDecrease} className='circular-button red-button small-button'>&minus;</button>
                                    <div className='medium-text '>{ticketNum}</div>
                                    <button onClick={handleTicketIncrease} className='circular-button red-button small-button'>+</button>
                                </div>
                                {max ? 
                                    <div className="red-text top-spacer">
                                        * There are only {event.availableTickets-event.ticketsSold} tickets left for this event! *
                                    </div>
                                : null}
                                {buyLimit? 
                                    <div className="red-text top-spacer">
                                        * You may only purchase 6 tickets for this event *
                                    </div>
                                : null}
                            </div>
                        <div className="buy-item-price">
                            <div className="form-label center">Item price</div>
                            <div className='buy-ticket-price'>{formatCost(event.cost)}</div>
                        </div>
                    </div>
                    <div className="right-justify">
                        <div className="buy-spacing">
                            <div className='buy-total-container'>
                                <div className="form-label buy-total-text"> Total USD </div>
                                <div className="buy-ticket-price-total">{formatCost(event.cost*ticketNum)}</div>
                            </div>
                        </div>
                        <div className='buy-button'>
                            <div className="buy-spacing">
                                <button onClick={handleCheckout} className="button red-button">Checkout</button>
                            </div>

                        </div>
                    </div>
                </div> 
            </div>
        </div>
        </>
    )
}
