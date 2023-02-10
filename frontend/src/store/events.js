import csrfFetch from './csrf.js'

const RECEIVE_EVENTS = './events/RECEIVE_EVENTS'
const RECEIVE_EVENT = '/events/RECEIVE_EVENT'
const REMOVE_EVENT = 'events/REMOVE_EVENT'

const receiveEvents = (events) => ({
    type: RECEIVE_EVENTS,
    events
})

const receiveEvent= (event) => ({
    type: RECEIVE_EVENT,
    event
})

const removeEvent = (eventId) => ({
    type: REMOVE_EVENT,
    eventId
})

export const getEvent = eventId => state =>{
    return state?.events ? state.events[eventId] : null;
}

// UPDATE GET POPULAR EVENTS SELECTOR

export const getPopularEvents = state => {
    return state?.events ? Object.values(state.events).slice(0,4) : []
}

export const getEvents = state => {
    return state?.events ? Object.values(state.events) : [];
}

export const fetchEvents = () => async(dispatch) => {
    const response = await csrfFetch('/api/events/')

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveEvents(data.events))
    }
}

export const fetchEvent = eventId => async(dispatch) => {
    const response = await csrfFetch(`/api/events/${eventId}`)

    if (response.ok) {
        const event = await response.json()
        dispatch(receiveEvent(event))
    }
}

export const createEvent = (event) => async dispatch => {
    const response = await csrfFetch('/api/events/', {
        method: 'POST',
        body: JSON.stringify(event),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok){
        const event = await response.json()
        dispatch(receiveEvent(event))
    }
}

export const updateEvent= event => async(dispatch) => {
    const response = await csrfFetch(`/api/events/${event.id}`, {
        method: "PATCH",
        body: JSON.stringify(event),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        const event = await response.json()
        dispatch(receiveEvent(event))
    }
}

export const deleteEvent = (eventId) => async dispatch => {
    const response= await csrfFetch(`/api/events/${eventId}`, {
        method: 'DELETE'
    })

    if (response.ok){
        dispatch(removeEvent(eventId))
    }
}

export const eventsReducer = (state = {}, action) =>{
    switch (action.type){
        case RECEIVE_EVENTS:
            return {...action.events}
        case RECEIVE_EVENT:
            return {...state, [action.event.id]: action.event}
        case REMOVE_EVENT:
            const newState = {...state}
            delete newState[action.eventId]
            return newState
        default:
            return state
    }

}

export default eventsReducer