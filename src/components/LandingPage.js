import React from 'react';
import '../styles/landingPage.css';
//import Registration from './Registration';

class LandingPage extends React.Component {
  toSignIn(val) {
    console.log("This is from sign in function. Value -> " + val);
    // Have the logic to route to sign in component here.
  }

  toSignUp(val) {
    console.log("This is from sign up function. Value -> " + val);
    // Have the logic to route to sign up component here.
  }

  render() {
    return (
      <div className="landing">
        <h2>Welcome to the Notes Application.</h2>
        <p>Enjoy creating short notes, sharing it with friends and family for important to-dos.</p>
        <button className="registration" onClick={this.toSignIn.bind(this, "signin")}>Sign in</button>
        <button className="registration" onClick={this.toSignUp.bind(this, "signup")}>Sign up</button>
      </div>
    );
  }
}

export default LandingPage;