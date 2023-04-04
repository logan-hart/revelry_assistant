import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link, useParams} from 'react-router-dom'
import { getEvent, fetchEvent } from '../../store/events'
import TicketingInfo from './TicketingInfo'
import BasicInfo from './BasicInfo'
import Details from './Details'
import './EventShow.css'


function EventShow (){
    const dispatch = useDispatch()
    const {eventId} = useParams()
    const event = useSelector(getEvent(eventId))

    useEffect(() => {
        dispatch(fetchEvent(eventId))
    }, [dispatch, eventId])
    
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    
    if (!event) {
        return (<div></div>)
    }

    const formatTime = (time) =>{
        return time.slice(11, 16)
    }

    let lineupList =() =>  {
        if (lineup) return lineup.join(' / ')
    } 

    const {name, lineup, startDate, images, ticketsSold, venue, startTime, endTime} = event

    return (
        <>
            <div>
                <div><img className="event-show-background-image"src={images}/></div>
                <div className='show-layout-1'>
                    <div className="event-show-background"></div>
                        <div className='container show-container '>
                            
                            <div className="event-show-basic-info">
                                <div>
                                    <div className="small-text white-text"> <img id="event-show-small-flag-icon" src="https://upload.wikimedia.org/wikipedia/commons/8/88/United-states_flag_icon_round.svg"/> New York  </div>
                                    <div className="medium-text white-text"> {name}: {lineupList()}</div>
                                </div>
                                <div className="container event-show-details-container">
                                    <div>
                                        <div className="form-label mid-grey-text">Venue</div>
                                        <div className="medium-text">{venue}</div>
                                        <div className="small-text">{venue.location}</div>
                                    </div>
                                    <div>
                                        <div className="form-label mid-grey-text">Date</div>
                                        <div className="medium-text">{startDate}</div>
                                        <div className="small-text">{formatTime(startTime)} - {formatTime(endTime)}</div>
                                    </div>
                                    <div>
                                        <div className="form-label mid-grey-text">Promoter</div>
                                        <div className="medium-text"></div>
                                    </div>
                                    <div>
                                        <div className="form-label mid-grey-text">Attending</div>
                                        <div className='red-text medium-text'>{ticketsSold}</div>

                                    </div>
                                    <div>
                                        <button className="button transparent-button" id='event-show-interested'>Interested</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

                <div className='show-layout-2'>
                    <div className='container'>
                        <div className="event-show-ticketing-info">
                            <div>
                                
                            </div>
                            <TicketingInfo event={event}/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='show-layout-3'>
                <Details event={event}/>
            </div>

        </>
    )
}

export default EventShow