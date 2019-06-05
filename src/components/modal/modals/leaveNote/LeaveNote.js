import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

import "./leaveNote.scss";

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
            variant="contained"
            className="OutlinedButtons-button-193"
            onClick={this.onCancel}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="OutlinedButtons-button-193"
            onClick={this.onLeave}
          >
            Leave
          </Button>
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
