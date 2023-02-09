import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginModal from './components/LoginModal';
import SignupForm from './components/SignupForm';
import NavBar from './components/NavBar';
import Content from './components/Content';
import Events from './components/Events';
import Footer from './components/Footer';
import UserModal from './components/UserModal';

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/login">
          <LoginModal />
        </Route>
        <Route path="/signup">
          <SignupForm />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;