import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupForm from './components/SignupForm';
import NavBar from './components/NavBar';
import Content from './components/Content/Content';
import EventsIndex from './components/EventsIndex';
import EventShow from './components/EventShow';
import EventCreate from './components/EventCreate/EventCreate';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import UserTickets from './components/UserTickets/UserTickets';
import PromotedEvents from './components/PromotedEvents/PromotedEvents';
import BuyTickets from './components/BuyTickets/BuyTickets';

function App() {
  

  return (
    <>
      <NavBar/>
      <Switch>
        <Route path='/users/:userId/tickets'>
          <UserTickets />
        </Route>
        <Route path='/users/:userId/events'>
          <PromotedEvents />
        </Route>
        <Route path='/events/:eventId/buyTickets'>
          <BuyTickets />
        </Route>
        <Route path='/events/create'>
          <EventCreate />
        </Route>
        <Route path='/events/:eventId'>
          <EventShow />
        </Route>
        <Route path='/events'>
          <EventsIndex />
        </Route>
        <Route path="/signup">
          <SignupForm />
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/">
          <LandingPage/>
        </Route>
        <Route path="/">
          <EventsIndex/>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;