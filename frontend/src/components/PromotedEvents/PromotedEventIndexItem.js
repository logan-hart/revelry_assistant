import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteEvent } from '../../store/events'
import ConfirmDelete from './ConfirmDelete'

export default function PromotedEventIndexItem({event}) {
    const dispatch = useDispatch()
    const {id, name, lineup, startDate, images, ticketsSold, venue} = event
    const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false)

    let lineupList =() =>  {
        if (lineup) return lineup.join(' / ')
    } 

    function handleDelete() {
        dispatch(deleteEvent(id))
    }   

    return (
        <li>
            <div className='promoted-event-list-container'>
                <Link to={`/events/${id}`}>
                    <div className='img-div'>
                        <img id="small-event-poster"src={images}/>
                    </div>
                </Link>
                <div className='info-div'>
                    <Link className="link white-text " to={`/events/${id}`}>
                        <div className="event-name">
                            {name}: {lineupList()}
                        </div>
                    </Link>
                    <div className="event-promoters white-text">
                        {startDate}
                    </div>
                    <div className='event-info-line'>
                        <div className='group'>
                            <div><i className="fa-solid fa-location-dot red-text"></i><span className="white-text"> {venue}</span></div>
                            <div className="event-spacer"></div>
                            <div><i className="fa-solid fa-ticket dark-text"></i><span className="dark-text"> RA Tickets</span></div>
                        </div>
                        <div><i className="fa-regular fa-user red-text"></i><span className="white-text"> {ticketsSold}</span></div>
                    </div>

                </div>
                <div>
                    <div className="promoted-buttons-container">
                        <Link to={`/events/create/${event.id}`}><button className="button transparent-button">Edit event</button></Link>
                        <button onClick={() => setConfirmDeleteOpen(true)} className="button red-button">Cancel event</button>
                        <ConfirmDelete open={confirmDeleteOpen} onClose={() => setConfirmDeleteOpen(false)} handleDelete={handleDelete} ></ConfirmDelete>
                    </div>
                </div>
            </div>

        </li>
    )
}