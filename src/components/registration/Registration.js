import React from "react";
import { connect } from "react-redux";

// Styles
import "./registration.scss";
import "../commons/forcedStyles.scss";

// Components
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";
import Button from "../commons/Button";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageView: "signin"
    };
  }

  changeView = () => {
    const { pageView } = this.state;

    if (pageView === "signin") {
      this.setState({ pageView: "signup" });
    } else if (pageView === "signup") {
      this.setState({ pageView: "signin" });
    }
  };

  render() {
    const pageView = this.state.pageView;
    let button;

    if (pageView === "signin") {
      button = (
        <Button
          type="primary"
          text="Create Account"
          onClick={this.changeView}
          disabled={false}
        />
      );
    } else if (pageView === "signup") {
      button = (
        <Button
          type="primary"
          text="Already registered?"
          onClick={this.changeView}
          disabled={false}
        />
      );
    }

    return (
      <div className="notes registration">
        <div className="registration-text">
          <h2>Welcome to the Notes Application.!</h2>
          <p>
            Enjoy creating short notes, sharing it with friends and family for
            important to-dos.!
          </p>
        </div>
        <div className="registration-content">
          {pageView === "signin" && <SignIn />}
          {pageView === "signup" && <SignUp />}
        </div>
        <div className="registration-footer">{button}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    signedIn: state.registration.signedIn
  };
};

export default connect(
  mapStateToProps,
  {}
)(Registration);
