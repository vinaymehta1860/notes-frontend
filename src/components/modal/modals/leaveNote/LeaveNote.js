import React from "react";
import { connect } from "react-redux";

import "./leaveNote.scss";

import Button from "../../../commons/Button";

import { leaveNote } from "../../../../redux/actions/notesActions";
import { toggleModalView } from "../../../../redux/actions/modalActions";

class LeaveNote extends React.Component {
  componentDidUpdate() {
    const { noteLeft, toggleModalView } = this.props;

    if (noteLeft) {
      toggleModalView({ showModal: false, modalView: "" });
    }
  }

  onCancel = () => {
    // Remove the modal from view
    this.props.toggleModalView({ showModal: false, modalView: "" });
  };

  onLeave = () => {
    // Remove the current user from sharedWith array of this note
    const { note_id, email, sessionToken, leaveNote } = this.props;

    leaveNote(email, sessionToken, note_id);
  };

  render() {
    return (
      <div className="delete-note-body">
        <div className="delete-note-body-content">
          <p>Are you sure you want to leave this note?</p>
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
            text="Leave"
            onClick={this.onLeave}
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
    noteLeft: state.notes.flags.noteLeft,
    sessionToken: state.registration.sessionToken
  };
};

const mapDispatchToProps = {
  leaveNote,
  toggleModalView
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaveNote);
