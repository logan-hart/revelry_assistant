import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link, useParams} from 'react-router-dom'
import { getEvent, fetchEvent } from '../../store/events'
import './EventShow.css'


function EventShow (){
    const dispatch = useDispatch()
    const {eventId} = useParams()
    const event = useSelector(getEvent(eventId))
 
    useEffect(() => {
        dispatch(fetchEvent(eventId))
    }, [dispatch, eventId])
    
    if (!event) {
        return (<div></div>)
    }

    
    const formatTime = (time) =>{
        return time.slice(11, 16)
    }

    let lineupList =() =>  {
        if (lineup) return lineup.join(' / ')
    } 


    const {name, lineup, startDate, photoUrl, ticketsSold, venue, startTime, endTime} = event

    return (
        <>
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
                                <div className="form-label dark-text">Venu</div>
                                <div className="medium-text">{venue}</div>
                                <div className="small-text">{venue.location}</div>
                            </div>
                            <div>
                                <div className="form-label dark-text">Date</div>
                                <div className="medium-text">{startDate}</div>
                                <div className="small-text">{formatTime(startTime)} - {formatTime(endTime)}</div>
                            </div>
                            <div>
                                <div className="form-label dark-text">Promoter</div>
                                <div className="medium-text"></div>
                            </div>
                            <div>
                                <div className="form-label dark-text">Attending</div>
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

                        <div className="show-ticket-wrapper">


                        </div>
                        <div className="show-action-buy">

                        </div>
                    </div>

                </div>
            </div>
        </div>



        
        <div className='show-layout-3'>
            <div className='container'>

            </div>
            <div className="event-show-lineup">
                <div>
                    <div className="event-show-info">

                    </div>
                    <div className="event-show-Poster">

                    </div>
                </div>

            </div>
        </div>

        </>
    )
}

export default EventShow