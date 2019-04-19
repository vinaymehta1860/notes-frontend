import React from "react";
import { connect } from "react-redux";

import "../../styles/registration.css";

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
          text="Go to Sign Up"
          disabled={false}
          onClick={this.changeView}
        />
      );
    } else if (pageView === "signup") {
      button = (
        <Button
          type="primary"
          text="Go to Sign In"
          disabled={false}
          onClick={this.changeView}
        />
      );
    }

    return (
      <div className="notes registration">
        {pageView === "signin" && <SignIn />}
        {pageView === "signup" && <SignUp />}
        {button}
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
)(Registration);
