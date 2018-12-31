import React from 'react';
import '../styles/landingPage.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class LandingPage extends React.Component {

  render() {
    return (
        <div className="landing">
          <h2>Welcome to the Notes Application.</h2>
          <p>Enjoy creating short notes, sharing it with friends and family for important to-dos.</p>
          
          <Link to="/signin">
            <button className="registration">Sign in</button>
          </Link>
          
          <Link to="/signup">
            <button className="registration">Sign Up</button>
          </Link>
        </div>
    );
  }
}

export default LandingPage;