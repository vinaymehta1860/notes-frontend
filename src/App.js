import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import LandingPage from './components/LandingPage';
import Registration from './components/Registration';
import HomePage from './components/home/HomePage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
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
        </div>
      </Router>
    );
  }
}

export default App;
