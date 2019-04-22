import React from "react";
import { connect } from "react-redux";

// Styles
import "./registration.scss";
import "../commons/forcedStyles.scss";

// Components
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
        <h3>Hop right in.!</h3>
        <p>Username: </p>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleUsernameChange}
          placeholder="Username"
        />
        <p>Password: </p>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
          placeholder="Password"
        />
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={this.handleSignin}>
          Get me in
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
