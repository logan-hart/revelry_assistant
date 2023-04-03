import { useEffect, dispatch } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { fetchEvent } from "../../store/events"
import { useDispatch } from "react-redux"
import CreateBody from "./CreateBody"
import CreateHeader from "./CreateHeader"
import './EventCreate.css'

export default function EventCreate() {
    const eventId = useParams().eventId
    const dispatch = useDispatch()
    const event = useSelector(state => state.events[eventId])

    let type = 'Create'
    if (event) {
        type = 'Update'
    }
    
    useEffect(() => {
        if (eventId) {
            dispatch(fetchEvent(eventId))
        }
    }, [dispatch, eventId])


    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
      <div>
            <CreateHeader event={event} type={type} />
            <CreateBody event={event} type={type} />
      </div>
    );
}