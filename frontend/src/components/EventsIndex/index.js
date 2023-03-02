import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getEvents, getEventsByDate, getPopularEvents, fetchEvents } from '../../store/events'
import EventIndexItem from './EventIndexItem'
import PopularEvent from './PopularEvent'


import SubNav from '../SubNav'
import Header from '../Header'
import './Events.css'

function EventsIndex(){
    const dispatch = useDispatch()
    const events = useSelector(getEventsByDate)
    const popularEvents = useSelector(getPopularEvents)
    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(fetchEvents())
    },[dispatch,])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    function submitLink() {
       return sessionUser ? "/events/create" : "/login"
    }

    return(
        <>
            <div id='layout-1'>
                <div className='container header-container'>
                    <Header />
                </div>
            </div>
                
            <div id='layout-2' >
                <div className='container sub-nav-container'>
                    <SubNav />
                </div>
            </div>
            
            <div id='layout-3'>
                <div className='container' id="event-container">
                    <div className='popular-header'>
                        <h1 className="red-text">/ Popular</h1>
                        <Link to={submitLink()}><button className="button transparent-button">Submit event</button></Link>
                    </div>
                    <div className ="popular-events">
                        {popularEvents.map((popEvent) =>(
                            <PopularEvent
                                key={popEvent.id}
                                popEvent={popEvent}
                            />
                        ))}
                    </div>
                    <div>
                        <div className ='event-Calendar'>
                            <h1 id="sticky-date" className='red-text'>/ Date</h1>
                                {events.map((event) => (
                                    <EventIndexItem
                                        key={event.id}
                                        event={event}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>       
        </>

    )
}

export default EventsIndex