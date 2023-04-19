import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getEvents } from '../../store/events';

export default function TicketIndexItem({ ticket }) {
  const { eventId, numTickets } = ticket;
  const events = useSelector(getEvents);

  if (!events) {
    return null;
  }

  return (
    <tr>
      <td className="dark-text">{events[eventId]?.startDate}</td>
      <td><Link className="white-text link" to={`/events/${eventId}`}> {events[eventId]?.name}</Link></td>
      <td className="white-text form-label">
    <div className="icon-text-wrapper">
        <i className="fa-solid fa-location-dot red-text" id="large-icon"></i>
        <span className="text">{events[eventId]?.venue}</span>
    </div>
    </td>
    <td className="white-text form-label">
    <div className="icon-text-wrapper">
        <i className="fa-solid fa-ticket red-text " id="large-icon"></i>
        <span className="text">{numTickets}</span>
    </div>
    </td>

    </tr>
  );
}
