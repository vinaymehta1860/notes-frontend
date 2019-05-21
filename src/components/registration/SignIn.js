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
      _email: "",
      _password: "",
      _error: false,
      _errorMessage: ""
    };
  }

  handleEmailChange = event => {
    this.setState({ _email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ _password: event.target.value });
  };

  keyPressed = event => {
    const { _email, _password } = this.state;
    if (event.key === "Enter" && _email !== "" && _password !== "") {
      this.props.registerSignIn(_email, _password);
    }
  };

  handleSignin = () => {
    const { _email, _password } = this.state;

    if (_email === "" || _password === "") {
      this.setState({
        _error: true,
        _errorMessage: "Email/Password can't be empty.!"
      });
      return;
    }

    this.props.registerSignIn(_email, _password);
  };

  render() {
    const { _email, _password, _error, _errorMessage } = this.state;
    let disabled = false;

    if (_error) {
      disabled = true;
    } else if (_email === "" || _password === "") {
      disabled = true;
    }

    return (
      <div className="notes registration-signin">
        <h3>Hop right in.!</h3>
        <p>Email</p>
        <input
          type="text"
          value={_email}
          onChange={this.handleEmailChange}
          placeholder="Email"
          autoFocus
        />
        <p>Password</p>
        <input
          type="password"
          value={_password}
          onChange={this.handlePasswordChange}
          placeholder="Password"
          onKeyPress={this.keyPressed}
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
