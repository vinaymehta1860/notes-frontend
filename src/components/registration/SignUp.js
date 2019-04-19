import React from "react";
import { connect } from "react-redux";

import "../../styles/registration.css";

// Components
import Button from "../commons/Button";

// Actions
import { registerSignUp } from "../../redux/actions";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSignup = () => {
    const { username, email, password } = this.state;
    this.props.registerSignUp(username, email, password);
  };

  render() {
    return (
      <div className="notes registration-signup">
        <h3>SIGN UP</h3>
        <p>Username: </p>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />
        <p>Email: </p>
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <p>Password: </p>
        <input
          type="text"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <br />
        <br />
        <Button type="primary" text="Sign Up" onClick={this.handleSignup} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  registerSignUp
};

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
