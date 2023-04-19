import React from 'react'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getEvent } from '../../store/events';

export default function BuyTickets() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [ticketNum, setTicketNum] = useState(parseInt(params.get('ticketNum')));
    const eventId = params.get('eventId');
    const event = useSelector(getEvent(eventId))
    const [max, setMax] = useState(true, false)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    function formatCost(cost) {
        return '$' +`${cost}` + '.00'
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
            <div className="ticket-header">Basket</div>
            <div>
            <div>
                <div>{event.name}<span> {event.lineup}</span></div>
                <div>{event.startDate}</div>
            </div>
            <div>
                <div>Quantity</div>
                <div className='event-show-ticket-buttons'>
                        <button onClick={handleTicketDecrease} className='circular-button transparent-button'>&minus;</button>
                        <div className='medium-text'>{ticketNum}</div>
                        <button onClick={handleTicketIncrease} className='circular-button transparent-button'>+</button>
                </div>
            </div>
            <div>
                <div>Item price</div>
                <div>{formatCost(event.cost)}</div>
            </div>
                <div>Total cost</div>
                <div>{formatCost(event.cost*ticketNum)}</div>
            </div>
        </>
    )
}
