import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Registration from './components/Registration';
import HomePage from './components/home/HomePage';

const routes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
          
    <Route path="/signin" 
      render={(props) => <Registration {...props} action={"signin"} val="randomValueToCheck" />}
    />
    
    <Route path="/signup" 
      render={(props) => <Registration {...props} action={"signup"} val="randomValueToCheck" />}
    />

    <Route path='/homepage'
      render={(props) => <HomePage {...props} />}
    />
  </Switch>
);

export default routes;