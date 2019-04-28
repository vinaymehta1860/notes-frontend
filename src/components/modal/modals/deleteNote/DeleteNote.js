import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

import "./deleteNote.scss";

import { deleteNote } from "../../../../redux/actions/notesActions";
import { toggleModalView } from "../../../../redux/actions/modalActions";

class DeleteNote extends React.Component {
  onCancel = () => {
    // Remove the modal from view
    this.props.toggleModalView(false, "");
  };

  onDelete = () => {
    // Delete the note
    const { note_id, username, sessionToken } = this.props;

    this.props.deleteNote(username, sessionToken, note_id);

    // Take down the modal as well
    this.props.toggleModalView(false, "");
  };

  render() {
    return (
      <div className="delete-note-body">
        <div className="delete-note-body-content">
          <p>Are you sure you want to delete this note?</p>
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
            onClick={this.onDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    note_id: state.modal.note_id,
    username: state.registration.username,
    sessionToken: state.registration.sessionToken
  };
};

const mapDispatchToProps = {
  deleteNote,
  toggleModalView
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteNote);
