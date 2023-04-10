import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchEvent } from '../../store/events'
import { getEvents } from '../../store/events'


export default function TicketIndexItem({ticket}) {
    const dispatch = useDispatch()
    const {eventId, numTickets} = ticket
    const events = useSelector(getEvents)

    
    // useEffect(() => {
    //     dispatch(fetchEvent(eventId))
    // }, [dispatch, ticket] )

    if(!events) {
        return null
    }
    
    return (
    <div>
        <div className="ticket-index-info ticket-index-items">
            <div className="mid-grey-text">{events[eventId]?.startDate}</div>
            <div><Link className="white-text link" to={`/events/${eventId}`}>{events[eventId]?.name}</Link></div>
            <div className="white-text"><i className="fa-solid fa-location-dot red-text"></i>{events[eventId]?.venue}</div>
            <div className="white-text"><i className="fa-solid fa-ticket red-text"></i>{numTickets}</div>
        </div>
    </div>
  )
}
