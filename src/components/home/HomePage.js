import React from "react";
import Owner from "./Owner";
import Shared from "./Shared";
import "../../styles/home/homePage.css";
//import Modal from '../modals/NewNote';
import Modal from "../modals/OldModal";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newNote: false
    };
  }

  handleLogout = () => {
    // Have the logic to handle logout over here
    console.log("This is from the logout function.");
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
        <button className="action-logout" onClick={this.handleLogout}>
          Logout
        </button>

        <Owner onClick={this.showNewNote} hideNote={this.hideNewNote} />

        <Shared />

        {newNote && <Modal {...newNoteProps} />}
      </div>
    );
  }
}

export default HomePage;
