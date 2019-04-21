import React from "react";
import { connect } from "react-redux";

import "../../styles/registration.css";

// Components
// import Button from "../commons/Button";
import Button from "@material-ui/core/Button";

// Actions
import { registerSignIn } from "../../redux/actions";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSignin = () => {
    const { username, password } = this.state;

    if (username === "" || password === "") {
      return;
    }

    this.props.registerSignIn(username, password);
  };

  render() {
    return (
      <div className="notes registration-signin">
        <h3>SIGN IN</h3>
        <p>Username: </p>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />
        <p>Password: </p>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <br />
        <br />
        {/* <Button type="primary" text="Sign In" onClick={this.handleSignin} /> */}
        <Button variant="contained" color="primary" onClick={this.handleSignin}>
          Sign In
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  registerSignIn
};

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
