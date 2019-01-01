import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import LandingPage from './components/LandingPage';
import Registration from './components/Registration';
import TopBar from './components/notes/TopBar';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={LandingPage} />
          
          <Route path="/signin" 
            render={(props) => <Registration {...props} action={"signin"} val="randomValueToCheck" />}
          />
          
          <Route path="/signup" 
            render={(props) => <Registration {...props} action={"signup"} val="randomValueToCheck" />}
          />

          <Route path='/topbar'
            render={(props) => <TopBar {...props} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
