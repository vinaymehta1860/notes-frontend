import React from "react";
import { connect } from "react-redux";

import { toggleModalView } from "../../redux/actions/modalActions";

import "./TopBar.scss";

class TopBar extends React.Component {
  editNote = () => {
    const { note_id, title, desc } = this.props.note;

    this.props.toggleModalView(
      { showModal: true, modalView: "editNote", viewSize: "big" },
      { note_id, title, desc }
    );
  };

  shareNote = () => {
    const { note_id, sharedWith } = this.props.note;

    this.props.toggleModalView(
      { showModal: true, modalView: "shareNote", viewSize: "big" },
      { note_id, sharedWith }
    );
  };

  deleteNote = () => {
    const { note_id } = this.props.note;

    this.props.toggleModalView(
      { showModal: true, modalView: "deleteNote", viewSize: "small" },
      { note_id }
    );
  };

  unshareNote = () => {
    const { note_id } = this.props.note;

    this.props.toggleModalView(
      { showModal: true, modalView: "unshareNote", viewSize: "small" },
      { note_id }
    );
  };

  render() {
    const { owner, shared } = this.props;
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

    if (owner && shared) {
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
