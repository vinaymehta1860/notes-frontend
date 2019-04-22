import React from "react";
import { connect } from "react-redux";

// Styles
import "./registration.scss";
import "../commons/forcedStyles.scss";

// Components
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";
import Button from "@material-ui/core/Button";

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
        <Button variant="contained" color="primary" onClick={this.changeView}>
          Create Account
        </Button>
      );
    } else if (pageView === "signup") {
      button = (
        <Button variant="contained" color="primary" onClick={this.changeView}>
          Already have an accoun with us?
        </Button>
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
