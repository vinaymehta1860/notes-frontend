/*
 *  Inside this component, there are two self defined components, OWNER & SHARED
 *
 *  Only import owner notes if the user has notes which he ownes. Pass the complete
 *  owner object from API response to Owner component for it to render it on the home page.
 *
 *  Only import shared notes if the user has shared notes with him. Pass the complete
 *  shared object from API response to Shared component for it to render it on the home page.
 */
import React from "react";
import { connect } from "react-redux";

// Styles
import "./homePage.scss";
import "./notes.scss";
import "../commons/forcedStyles.scss";

// Components
import Owner from "./Owner";
import Shared from "./Shared";
import Button from "@material-ui/core/Button";

// Actions
import {
  toggleLoading,
  sessionStorageUpdate,
  logoutUser
} from "../../redux/actions";

import { getAllNotes } from "../../redux/actions/notesActions";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newNote: false
    };

    this.toggleLoading();
  }

  componentDidMount() {
    // Get all the notes when this component mounts
    const { username, sessionToken } = this.props;

    this.props.getAllNotes(username, sessionToken);
  }

  toggleLoading = () => {
    const {
      firstname,
      signedIn,
      sessionToken,
      sessionTokenStored,
      username
    } = this.props;

    if (signedIn && sessionTokenStored === false) {
      // Directly store the sessionToken and username in localStorage without hashing.
      localStorage.setItem("firstname", firstname);
      localStorage.setItem("username", username);
      localStorage.setItem("sessionToken", sessionToken);

      // Change the flag that username and password have been stored in localStorage.
      this.props.sessionStorageUpdate(true);
    }
  };

  handleLogout = () => {
    const { username, sessionToken } = this.props;
    this.props.logoutUser(username, sessionToken);
  };

  hideNewNote = () => {
    console.log("Hide note button clicked.");
    this.setState({ newNote: false });
  };

  render() {
    const { firstname } = this.props;

    return (
      <div className="homepage">
        <div className="homepage-header">
          <div className="homepage-header-greeting">
            {firstname && <p>Hi {firstname}..!!</p>}
          </div>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleLogout}
          >
            Logout
          </Button>
        </div>
        <div className="homepage-content">
          <Owner />
          <Shared />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    firstname: state.registration.firstname,
    loading: state.registration.loading,
    signedIn: state.registration.signedIn,
    sessionToken: state.registration.sessionToken,
    sessionTokenStored: state.registration.sessionTokenStored,
    username: state.registration.username
  };
};

const mapDisptachToProps = {
  toggleLoading,
  sessionStorageUpdate,
  logoutUser,
  getAllNotes
};

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(HomePage);
