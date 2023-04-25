import csrfFetch from "./csrf";

export const ADD_USER = 'users/addUser';
export const ADD_USERS = 'users/addUsers';

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user
});

export const addUsers = (users) => ({
  type: ADD_USERS,
  payload: users
});

export const fetchUser = userId => async(dispatch) => {
  const response = await csrfFetch(`/api/user/${userId}`)
  
  if (response.ok) {
      const data = await response.json()
      debugger
      dispatch(addUser(data.user))
      return response
  } 
}

export const updateUser = user => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${user.id}`, {
    method: 'PATCH',
    body: JSON.stringify({user: user}),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (response.ok) {
    const user = await response.json()
    dispatch(addUser(user))
  }
}

function usersReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case ADD_USER:
      const user = action.payload;
      return { ...state, user: user };
    case ADD_USERS:
      const users = action.payload;
      return { ...state, ...users };
    default:
      return state;
  }
}

export default usersReducer;