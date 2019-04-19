import React from "react";
import { connect } from "react-redux";

import "../styles/landingPage.css";

// Components
import Registration from "./registration/Registration";
import HomePage from "./home/HomePage";

class LandingPage extends React.Component {
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

export default connect(
  mapStateToProps,
  {}
)(LandingPage);
