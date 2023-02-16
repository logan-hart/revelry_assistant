import csrfFetch from "./csrf";

const ADD_TICKET = 'tickets/addTicket'
const ADD_TICKETS = 'tickets/addTickets'
const REMOVE_TICKET = 'tickets/removeTicket'

export const addTicket = ticket => ({
    type: ADD_TICKET,
    ticket
})

export const addTickets = tickets => ({
    type: ADD_TICKETS,
    tickets
})

export const removeTicket = ticketId => ({
    type: REMOVE_TICKET,
    ticketId
})

export const fetchTicket = (ticketId) => async(dispatch) =>{
    const response = await csrfFetch(`/api/tickets/${ticketId}`)

    if (response.ok) {
        const data = await response.json()
        dispatch(addTicket(data.ticket))
        return response
    }
}

export const fetchTickets= () => async(dispatch) => {
    const response = await csrfFetch(`/api/tickets/`)

    if (response.ok) {
        const data = await response.json();
        dispatch(addTickets(data.tickets))
    }
}

export const createTicket = (ticket) => async dispatch => {
    const response = await csrfFetch("/api/tickets", {
      method: "POST",
      body: JSON.stringify(ticket)
    });
    const data = await response.json();
    dispatch(addTicket(data.ticket));
    return response;
  };

function ticketsReducer(state = {}, action) {
    switch(action.type){
        case ADD_TICKET: {
            return {...state, [action.ticket.id]: action.ticket}
        }
        case ADD_TICKETS: {
            return {...action.tickets}
        }
        case REMOVE_TICKET: {
            const newState = {...state}
            delete newState[action.ticketId]
            return newState
        }
        default:
            return state;
    }
}

export default ticketsReducer