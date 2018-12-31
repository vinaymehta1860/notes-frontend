import React from 'react';
import'../styles/registration.css';

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      action: this.props.action,
      value: this.props.val
    }
  }

  handleSignin = () => {
    // This is from the sign in function
    console.log("This is from the sign in function.");
  }

  handleSignup = () => {
    // This is from the sign up function
    console.log("This is from the sign up function.");
  }

  render() {
    const action = this.state.action;
    console.log("Action is -> " + action);
    console.log("Value is -> " + this.state.value);

    if (action === 'signin') {
      return (
        <div>
          <h3>SIGN IN</h3>
          <p>Username: </p>
          <input type="text" />
          <p>Password: </p>
          <input type="text" /><br /><br />
          <button onClick={this.handleSignin}>Sign in</button>
        </div>
      );
    }
    else if (action === 'signup') {
      return (
        <div>
          <h3>SIGN UP</h3>
          <p>Username: </p>
          <input type="text" />
          <p>Email: </p>
          <input type="text" />
          <p>Password: </p>
          <input type="text" /><br /><br />
          <button onClick={this.handleSignup}>Sign Up</button>
        </div>
      );
    }
    else {
      return (
        <h3>There's something wrong with the parameter passing for registration. Action recieved is: {action}.</h3>
      );
    }
  }
}

export default Registration;