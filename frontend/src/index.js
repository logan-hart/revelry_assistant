import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, } from 'react-router-dom';
import './reset.css';
import './index.css';
import App from './App';
import configureStore from './store';
import csrfFetch, { restoreCSRF } from './store/csrf';
import * as sessionActions from './store/session'
import * as eventActions from './store/events'
import * as ticketActions from './store/tickets'
import * as userActions from './store/user'


const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions
  window.eventActions = eventActions
  window.ticketActions = ticketActions
  window.userActions = userActions
}



function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

const renderApplication = () => {
  reactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if (
  sessionStorage.getItem("currentUser") === null ||
  sessionStorage.getItem("X-CSRF-Token") === null 
) {
  store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
  renderApplication();
}
