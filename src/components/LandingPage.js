import React from "react";
import { connect } from "react-redux";
// import crypto from "crypto";

import "./landingPage.scss";

// Components
import Registration from "./registration/Registration";
import HomePage from "./home/HomePage";
import Modal from "./modal/Modal";

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
    const { signedIn } = this.props;

    return (
      <div className="landing">
        {!signedIn && <Registration />}
        {signedIn && <HomePage />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    signedIn: state.registration.signedIn
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
