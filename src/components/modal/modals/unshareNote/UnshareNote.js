import React from "react";
import { connect } from "react-redux";

import "./unshareNote.scss";

import Button from "../../../commons/Button";

import { unshareNote } from "../../../../redux/actions/notesActions";
import { toggleModalView } from "../../../../redux/actions/modalActions";

class UnshareNote extends React.Component {
  componentDidUpdate() {
    const { noteUnshared, toggleModalView } = this.props;

    if (noteUnshared) {
      toggleModalView({ showModal: false, modalView: "" });
    }
  }

  onCancel = () => {
    // Remove the modal from view
    this.props.toggleModalView({ showModal: false, modalView: "" });
  };

  onUnshare = () => {
    // Unshare the note
    const { note_id, email, sessionToken, unshareNote } = this.props;

    unshareNote(email, sessionToken, note_id);
  };

  render() {
    return (
      <div className="delete-note-body">
        <div className="delete-note-body-content">
          <p>Are you sure you want to unshare this note?</p>
        </div>
        <div className="delete-note-body-footer">
          <Button
            type="transparent"
            text="Cancel"
            onClick={this.onCancel}
            disabled={false}
          />
          <Button
            type="secondary"
            text="Unshare"
            onClick={this.onUnshare}
            disabled={false}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.registration.email,
    note_id: state.modal.data.note_id,
    noteUnshared: state.notes.flags.noteUnshared,
    sessionToken: state.registration.sessionToken
  };
};

const mapDispatchToProps = {
  unshareNote,
  toggleModalView
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnshareNote);
