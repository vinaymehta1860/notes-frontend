import React from "react";
import { connect } from "react-redux";

import { toggleModalView } from "../../redux/actions/modalActions";

import "./TopBar.scss";

class TopBar extends React.Component {
  editNote = () => {
    // Trigger the Edit modal
    this.props.toggleModalView(true, "editNote", this.props.note_id);
  };

  shareNote = () => {
    // Trigger the Share modal
    console.log("NoteId: " + this.props.note_id);
  };

  deleteNote = () => {
    // Trigger the Delete modal
    console.log("Delete");
  };

  unshareNote = () => {
    // Trigger the Unshare modal
  };

  render() {
    const { owner, unshare } = this.props;
    let editButton, shareButton, deleteButton, unshareButton;

    if (owner) {
      editButton = (
        <button className="top-bar-button button-edit" onClick={this.editNote}>
          Edit
        </button>
      );
      shareButton = (
        <button
          className="top-bar-button button-share"
          onClick={this.shareNote}
        >
          Share
        </button>
      );
      deleteButton = (
        <button
          className="top-bar-button button-delete"
          onClick={this.deleteNote}
        >
          Delete
        </button>
      );
    }

    if (unshare) {
      unshareButton = (
        <button
          className="top-bar-button button-unshare"
          onClick={this.unshareNote}
        >
          Unshare
        </button>
      );
    }

    return (
      <div className="action-bar">
        {editButton}
        {shareButton}
        {deleteButton}
        {unshareButton}
      </div>
    );
  }
}

const mapDispatchToProps = {
  toggleModalView
};

export default connect(
  null,
  mapDispatchToProps
)(TopBar);
