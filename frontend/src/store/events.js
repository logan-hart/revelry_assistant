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

export const getPopularEvents = state => {
    if (state?.events) {
        const obj = state?.events 
        const sorted = Object.entries(obj).sort((a, b) => b[1].ticketsSold - a[1].ticketsSold);
        const top4 = sorted.slice(0, 4).map(pair => pair[1])
        return top4
    } else {
        return []
    }
}

export const getEventsByDate = state => {
    if (state?.events) {
        const obj = state?.events 
        const sorted = Object.entries(obj).sort((a, b) => b[1].startDate - a[1].startDate);
        return sorted.map(pair => pair[1])
    } else {
        return []
    }
}

export const getEvents = state => {
    return state?.events ? Object.values(state.events) : [];
}

export const fetchEvent = eventId => async(dispatch) => {
    const response = await csrfFetch(`/api/events/${eventId}`)
    
    if (response.ok) {
        const data = await response.json()
        dispatch(receiveEvent(data.event))
        return response
    } 
}

export const fetchEvents = () => async(dispatch) => {
    const response = await csrfFetch('/api/events/')

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveEvents(data.events))
    }
}
export const fetchEventsByDate = () => async(dispatch) => {
    const response = await csrfFetch('/api/events/byDate')

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveEvents(data.events))
    }
}

export const fetchPromotedEvents = (promoterId) => async(dispatch) =>{
    const response = await csrfFetch(`/api/events/?promoterId=${promoterId}`)

    if (response.ok) {
        const data = await response.json()
        dispatch(receiveEvents(data.events))
    }
}

export const fetchTicketEvents = (promoterId) => async(dispatch) =>{
    const response = await csrfFetch(`/api/events/?promoterId=${promoterId}`)

    if (response.ok) {
        const data = await response.json()
        dispatch(receiveEvents(data.events))
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

export const updateEvent = event => async(dispatch) => {
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