import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupForm from './components/SignupForm';
import NavBar from './components/NavBar';
import Content from './components/Content';
import EventsIndex from './components/EventsIndex';
import Footer from './components/Footer';
import EventShow from './components/EventShow';
import EventCreate from './components/EventCreate';

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route path='/events/create'>
          <EventCreate />
        </Route>
        <Route path='/events/:eventId'>
          <EventShow />
        </Route>
        <Route path='/events'>
          <Content/>
        </Route>
        <Route path="/signup">
          <SignupForm />
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/">
          <EventsIndex />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;