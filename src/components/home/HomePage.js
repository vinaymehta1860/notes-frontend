import React from "react";
import { connect } from "react-redux";
// import crypto from "crypto";

// Styles
import "../../styles/home/homePage.css";

// Components
// import Modal from '../modals/NewNote';
import Modal from "../modals/OldModal";
import Owner from "./Owner";
import Shared from "./Shared";
import Button from "../commons/Button";

// Actions
import {
  toggleLoading,
  sessionStorageUpdate,
  logoutUser
} from "../../redux/actions";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newNote: false
    };

    this.toggleLoading();
  }

  toggleLoading = () => {
    const { signedIn, sessionToken, sessionTokenStored, username } = this.props;

    // if (signedIn && sessionTokenStored === true) {
    //   this.props.toggleLoading(false);
    // }

    if (signedIn && sessionTokenStored === false) {
      // Directly store the sessionToken and username in localStorage without hashing.
      //  More on security to be taken care in future.
      localStorage.setItem("username", username);
      localStorage.setItem("sessionToken", sessionToken);

      // Change the flag that username has password have been stored in localStorage.
      this.props.sessionStorageUpdate(true);
    }
  };

  /*createHash = valueToHash => {
    const promise = new Promise((resolve, reject) => {
      var hash = crypto
        .createHmac("sha256", valueToHash)
        .update(Date.now().toString())
        .digest("hex");
      resolve(hash);
    });

    return promise;
  };*/

  handleLogout = () => {
    const { username, sessionToken } = this.props;
    this.props.logoutUser(username, sessionToken);
  };

  showNewNote = () => {
    console.log("New note button clicked.");
    this.setState({ newNote: true });
  };

  hideNewNote = () => {
    console.log("Hide note button clicked.");
    this.setState({ newNote: false });
  };

  render() {
    /*
      Inside this fragment, have two self defined components, OWNER & SHARED
      
      Only import owner notes if the user has notes which he ownes. Pass the complete
      owner object from API response to Owner component for it to render it on the home page.
      
      Only import shared notes if the user has shared notes with him. Pass the complete
      shared object from API response to Shared component for it to render it on the home page.
    */

    const newNoteProps = {
      title: "New Note",
      close: true,
      cancel: false,
      success: false,
      modal: {
        type: "NewNote",
        includeBottomBar: true,
        hideNote: this.hideNewNote
      }
    };

    const newNote = this.state.newNote;

    return (
      <div>
        {/* <button className="action-logout" onClick={this.handleLogout}>
          Logout
        </button> */}
        <Button type="primary" text="Logout" onClick={this.handleLogout} />

        <Owner onClick={this.showNewNote} hideNote={this.hideNewNote} />

        <Shared />

        {newNote && <Modal {...newNoteProps} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.application.loading,
    signedIn: state.application.signedIn,
    sessionToken: state.application.sessionToken,
    sessionTokenStored: state.application.sessionTokenStored,
    username: state.application.username
  };
};

const mapDisptachToProps = {
  toggleLoading,
  sessionStorageUpdate,
  logoutUser
};

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(HomePage);
