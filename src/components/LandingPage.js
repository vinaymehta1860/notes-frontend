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
    if (sessionToken && username) {
      this.props.verifyUser(username, sessionToken);
    }
  }

  componentDidUpdate() {
    const { signedIn } = this.props;
    // Change the flag that sessionToken is stored in localStorage
    if (!signedIn) {
      this.props.sessionStorageUpdate(false);
      localStorage.removeItem("username");
      localStorage.removeItem("sessionToken");
    }
  }

  render() {
    const signedIn = this.props.signedIn;
    return (
      <div className="landing">
        <h2>Welcome to the Notes Application.</h2>
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
