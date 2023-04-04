import React from 'react'
import { Link } from 'react-router-dom'
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
        <div className="ticket-index-info ticket-index-columns">
            <div className="mid-grey-text">{events[eventId].startDate}</div>
            <div><Link className="white-text link" to={`/events/${eventId}`}>{events[eventId].name}</Link></div>
            <div className="white-text"><i className="fa-solid fa-location-dot red-text"></i>{events[eventId].venue}</div>
            <div className="white-text"><i className="fa-solid fa-ticket red-text"></i>{numTickets}</div>
        </div>
    </div>
  )
}
