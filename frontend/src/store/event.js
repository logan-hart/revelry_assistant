import csrfFetch from './csrf.js'

const ADD_EVENT = '/events/addEvent'
const REMOVE_EVENT = 'events/removeEvent'

const addEvent= (event) => ({
    type: ADD_EVENT,
    payload: event
})

const removeEvent = (eventId) => ({
    type: REMOVE_EVENT,
    payload: eventId
})

const createEvent = (event) => async dispatch => {
    const response = await csrfFetch('/api/event/', {
        method: 'POST',
        body: JSON.stringify(event)
    })

    if (response.ok){
        const event = await response.json()
        dispatch(addEvent(event))
    }
}

const deleteEvent = (eventId) => async dispatch => {
    const response= await csrfFetch(`/api/events/${eventId}`, {
        method: 'DELETE'
    })

    if (response.ok){
        const event = await response.json()
        dispatch(removeEvent)
    }
}

const eventReducer = (state = {}, action) =>{
    switch (action.type){
        case ADD_EVENT:
            return {...state, event: action.event}
        case REMOVE_EVENT:
            const newState = {...state}
            delete newState[action.eventId]
            return newState
        default:
            return state
    }

}

export default eventReducer