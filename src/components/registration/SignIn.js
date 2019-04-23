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
      _username: "",
      _password: "",
      _error: false,
      _errorMessage: ""
    };
  }

  handleUsernameChange = event => {
    this.setState({ _username: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ _password: event.target.value });
  };

  handleSignin = () => {
    const { _username, _password } = this.state;

    if (_username === "" || _password === "") {
      this.setState({
        _error: true,
        _errorMessage: "Username/Password can't be empty.!"
      });
      return;
    }

    this.props.registerSignIn(_username, _password);
  };

  render() {
    const { _username, _password, _error, _errorMessage } = this.state;
    let disabled = false;

    if (_error) {
      disabled = true;
    } else if (_username === "" || _password === "") {
      disabled = true;
    }

    return (
      <div className="notes registration-signin">
        <h3>Hop right in.!</h3>
        <p>Username</p>
        <input
          type="text"
          value={_username}
          onChange={this.handleUsernameChange}
          placeholder="Username"
          autoFocus
        />
        <p>Password</p>
        <input
          type="password"
          value={_password}
          onChange={this.handlePasswordChange}
          placeholder="Password"
        />
        <br />
        <br />
        {_error && (
          <div className="registration-error">
            <p>{_errorMessage}</p>
          </div>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleSignin}
          disabled={disabled}
        >
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
