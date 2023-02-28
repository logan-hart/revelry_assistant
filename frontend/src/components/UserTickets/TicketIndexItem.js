import React from 'react'
import { useSelector } from 'react-redux'
import { getEvents } from '../../store/events'


export default function TicketIndexItem({ticket}) {
    const {eventId, numTickets} = ticket
    const events = useSelector(getEvents)


  
    if(!events) {
        return null
    }
    
    
    return (
    <div>
        <div>

        </div>
        <div className="big-text">
            BLAH
        </div>
        <div>
            <div>{events[eventId].startDate}</div>
            <div>{events[eventId].name}</div>
            <div>{events[eventId].location}</div>
            <div>{numTickets}</div>
        </div>
    </div>
  )
}
