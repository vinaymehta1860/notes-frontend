import React from "react";
import { connect } from "react-redux";

// Styles
import "./registration.scss";
import "../commons/forcedStyles.scss";

// Components
import Button from "../commons/Button";

// Actions
import { registerSignUp } from "../../redux/actions";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _firstname: "",
      _lastname: "",
      _email: "",
      _password: "",
      _confirmPassword: "",
      _error: false,
      _errorMessage: ""
    };
  }

  handleFirstnameChange = event => {
    this.setState({ _firstname: event.target.value });
  };

  handleLastnameChange = event => {
    this.setState({ _lastname: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ _email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ _password: event.target.value });
  };

  handleConfirmPasswordChange = event => {
    this.setState({ _confirmPassword: event.target.value });
  };

  handleSignup = () => {
    const {
      _firstname,
      _lastname,
      _email,
      _password,
      _confirmPassword
    } = this.state;

    if (
      _firstname === "" ||
      _lastname === "" ||
      _email === "" ||
      _password === "" ||
      _confirmPassword === ""
    ) {
      this.setState({
        _error: true,
        _errorMessage: "None of the above field can be empty my friend.!"
      });
      return;
    } else if (_password !== _confirmPassword) {
      this.setState({ _error: true, _errorMessage: "Passwords don't match.!" });
      return;
    }

    this.props.registerSignUp(_firstname, _lastname, _email, _password);
  };

  render() {
    const {
      _firstname,
      _lastname,
      _email,
      _password,
      _confirmPassword,
      _error,
      _errorMessage
    } = this.state;

    let disabled = false;

    if (_error) {
      disabled = true;
    } else if (
      _firstname === "" ||
      _lastname === "" ||
      _email === "" ||
      _password === "" ||
      _confirmPassword === ""
    ) {
      disabled = true;
    } else if (_password !== _confirmPassword) {
      disabled = true;
    }

    return (
      <div className="notes registration-signup">
        <div className="registration-signup-heading">
          <h3>Give us some info to set you up.!</h3>
        </div>
        <div className="registration-signup-content">
          <div className="registration-signup-content-field">
            <span>Firstname</span>
            <input
              type="text"
              value={_firstname}
              onChange={this.handleFirstnameChange}
              placeholder="Fistname"
              autoFocus
            />
          </div>
          <div className="registration-signup-content-field">
            <span>Last Name</span>
            <input
              type="text"
              value={_lastname}
              onChange={this.handleLastnameChange}
              placeholder="Lastname"
            />
          </div>
          <div className="registration-signup-content-field">
            <span>Email</span>
            <input
              type="text"
              value={_email}
              onChange={this.handleEmailChange}
              placeholder="Email"
            />
          </div>
          <div className="registration-signup-content-field">
            <span>Password</span>
            <input
              type="password"
              value={_password}
              onChange={this.handlePasswordChange}
              placeholder="Password"
            />
          </div>
          <div className="registration-signup-content-field">
            <span>Password</span>
            <input
              type="password"
              value={_confirmPassword}
              onChange={this.handleConfirmPasswordChange}
              placeholder="Confirm Password"
            />
          </div>
        </div>
        {_error && (
          <div className="registration-error">
            <p>{_errorMessage}</p>
          </div>
        )}
        <div className="registration-signup-footer">
          <Button
            type="primary"
            text="Get me started"
            onClick={this.handleSignup}
            disabled={disabled}
          />
        </div>
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
