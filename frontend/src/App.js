import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginModal from './components/LoginModal';
import SignupForm from './components/SignupForm';
import NavBar from './components/NavBar';
import Content from './components/Content';
import EventsIndex from './components/EventsIndex';
import Footer from './components/Footer';
import UserModal from './components/UserModal';

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route path='/events/:id'>
          {/* <Event /> */}
        </Route>
        <Route path="/signup">
          <SignupForm />
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