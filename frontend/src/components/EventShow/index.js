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
    // const {name, lineup, startDate, photoUrl, ticketsSold, venue} = event
    
    // let lineupList =() =>  {
    //     if (lineup) return lineup.join('/ ')
    // } 

    return (
        <>
        {/* <div className='show-layout-1'>
            <div className="event-show-background"></div>
                <div className='container show-container '>
                    
                    <div className="event-show-basic-info">
                        <div> New York * </div>
                        <div> {name}: {lineupList()}</div>

                    </div>

                    <div className="event-show-ticketing-info">

                    </div>


            </div>
        </div>
        
        <div>
            <div>

            </div>
            <div className="event-show-lineup">
                <div>
                    <div className="event-show-info">

                    </div>
                    <div className="event-show-Poster">

                    </div>
                </div>

            </div>
        </div> */}

        </>
    )
}

export default EventShow