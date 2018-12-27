import React from 'react';
import'../styles/registration';

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      action: this.props.action
    }
  }

  render() {
    const action = this.state.action;

    if (action === 'signin') {
      return (
        <div>
          <h3>SIGN IN</h3>
          <p>Username: </p>
          <input type="text" />
          <p>Password: </p>
          <input type="text" />
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
          <input type="text" />
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