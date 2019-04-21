import React from "react";
import { connect } from "react-redux";
// import crypto from "crypto";

import "../styles/landingPage.css";

// Components
import Registration from "./registration/Registration";
import HomePage from "./home/HomePage";

// Actions
import {
  registerSignIn,
  verifyUser,
  sessionStorageUpdate
} from "../redux/actions";

class LandingPage extends React.Component {
  componentWillMount() {
    const sessionToken = localStorage.getItem("sessionToken");
    const username = localStorage.getItem("username");
    const firstname = localStorage.getItem("firstname");
    if (sessionToken && username) {
      this.props.verifyUser(firstname, username, sessionToken);
    }
  }

  componentDidUpdate() {
    const { signedIn } = this.props;
    // Change the flag that sessionToken is stored in localStorage
    if (!signedIn) {
      this.props.sessionStorageUpdate(false);
      localStorage.removeItem("username");
      localStorage.removeItem("sessionToken");
      localStorage.removeItem("firstname");
    }
  }

  render() {
    const { signedIn, firstname } = this.props;
    return (
      <div className="landing">
        {firstname && <h1>Hi {firstname}..!!</h1>}
        <h2>Welcome to the Notes Application.!</h2>
        <p>
          Enjoy creating short notes, sharing it with friends and family for
          important to-dos.!
        </p>

        {!signedIn && <Registration />}
        {signedIn && <HomePage />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    firstname: state.application.firstname,
    signedIn: state.application.signedIn
  };
};

const mapDispatchToProps = {
  registerSignIn,
  verifyUser,
  sessionStorageUpdate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
