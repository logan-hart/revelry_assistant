import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getEvents, fetchPromotedEvents } from '../../store/events'
import PromotedEventIndexItem from './PromotedEventIndexItem'
import './PromotedEvents.css'


export default function PromotedEvents() {
    const dispatch = useDispatch()
    const events = useSelector(getEvents)
    const userId = useSelector(state => state.session.user.id)

    useEffect (() => {
      dispatch(fetchPromotedEvents(userId))
    }, [dispatch, userId])

    if (!events) {
      return null
    }

  return (
    <div>
      <div className='promoted-events-layout'>
        <div className="container promoted-events-container">
          <div className="white-text big-text">My events</div>
        </div>
      </div>


      <div className='promoted-body-layout'>
        <div className='container promoted-body-container'>
          <div spacer>
            <div className="red-text medium-text promoted-spacer">/ UPCOMING EVENTS</div>
          </div>
          <div>
            {events.map(event =>
              <PromotedEventIndexItem
                  key={event.id}
                  event={event}
              />
            )}
          </div>
          </div>
        </div>
    </div>
  )
}
