import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTickets, fetchUserTickets, fetchTicketEvents } from '../../store/tickets';
import TicketIndexItem from './TicketIndexItem';
import './UserTickets.css'

export default function UserTickets() {
  const dispatch = useDispatch()
  const tickets = useSelector(getTickets)
  const userId = useSelector(state => state.session.user.id)

  useEffect (() => {
    dispatch(fetchUserTickets(userId))
  }, [dispatch, userId])

  // useEffect (() => {
  //   dispatch(fetchTicketEvents())

  // })
    
  useEffect(() => {
      window.scrollTo(0, 0);
  })

  if(!tickets) {
    return null
  }

  return (
    <div>
      <div className='promoted-events-layout'>
        <div className="container promoted-events-container">
          <div className="white-text big-text">My tickets</div>
        </div>
      </div>

      <div className='user-tickets-body-layout'>
        <div className='container user-tickets-body-container'>
          <div className="spacer">
            <div className="red-text medium-text user-tickets-spacer">/ UPCOMING EVENTS</div>
          </div>
          <div className="ticket-index-columns mid-grey-text">
            <div>Event date</div>
            <div>Event title</div>
            <div>Location</div>
            <div>Tickets</div>
          </div>
          <div>
            {tickets.map(ticket =>
              <TicketIndexItem
                key={ticket.id}
                ticket={ticket}
              />
            )}
          </div>
          </div>
        </div>

    </div>
  )
}
