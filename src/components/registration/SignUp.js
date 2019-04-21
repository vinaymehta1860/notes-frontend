import React from "react";
import { connect } from "react-redux";

import "../../styles/registration.css";

// Components
// import Button from "../commons/Button";
import Button from "@material-ui/core/Button";

// Actions
import { registerSignUp } from "../../redux/actions";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: ""
    };
  }

  handleFirstnameChange = event => {
    this.setState({ firstname: event.target.value });
  };

  handleLastnameChange = event => {
    this.setState({ lastname: event.target.value });
  };

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
    const { firstname, lastname, username, email, password } = this.state;

    if (
      firstname === "" ||
      lastname === "" ||
      username === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }

    this.props.registerSignUp(firstname, lastname, username, email, password);
  };

  render() {
    return (
      <div className="notes registration-signup">
        <h3>SIGN UP</h3>
        <p>First Name: </p>
        <input
          type="text"
          value={this.state.firstname}
          onChange={this.handleFirstnameChange}
        />
        <p>Last Name: </p>
        <input
          type="text"
          value={this.state.lastname}
          onChange={this.handleLastnameChange}
        />
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
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <br />
        <br />
        {/* <Button type="primary" text="Sign Up" onClick={this.handleSignup} /> */}
        <Button variant="contained" color="primary" onClick={this.handleSignup}>
          Sign Up
        </Button>
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
