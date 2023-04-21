
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTickets, fetchUserTickets, fetchTicketEvents } from '../../store/tickets';
import { fetchEvents } from '../../store/events';
import TicketIndexItem from './TicketIndexItem';
import './UserTickets.css';

export default function UserTickets() {
  const dispatch = useDispatch();
  const tickets = useSelector(getTickets);
  const userId = useSelector(state => state.session.user.id);

  useEffect(() => {
    dispatch(fetchUserTickets(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!tickets) {
    return null;
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
            <div className="red-text medium-text user-tickets-spacer upcoming">/ UPCOMING EVENTS</div>
          </div>
          <table className="ticket-table">
            <thead>
              <tr>
                <th className="dark-text header form-label">Event date</th>
                <th className="dark-text header form-label">Event title</th>
                <th className="dark-text header form-label">Location</th>
                <th className="dark-text header form-label">Tickets</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map(ticket => (
                <TicketIndexItem key={ticket.id} ticket={ticket} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
