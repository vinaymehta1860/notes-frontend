import React from "react";
import { connect } from "react-redux";

// Styles
import "./shareNote.scss";

// Actions
import { shareNote } from "../../../../redux/actions/notesActions";
import {
  toggleModalView,
  clearRecipients
} from "../../../../redux/actions/modalActions";

// Components
import Invitees from "./Invitees";
import Recipients from "./Recipients";
import Button from "@material-ui/core/Button";

class ShareNote extends React.Component {
  componentDidUpdate() {
    const { noteShared, toggleModalView, clearRecipients } = this.props;

    if (noteShared) {
      clearRecipients();
      toggleModalView(false, "");
    }
  }

  shareNote = () => {
    const {
      recipients,
      shareNote,
      note_id,
      username,
      sessionToken
    } = this.props;

    shareNote(username, sessionToken, note_id, recipients);
  };

  render() {
    const { recipients } = this.props;
    let disabled = false;

    if (recipients.length === 0) {
      disabled = true;
    }

    return (
      <div className="shareNote-modal-body">
        <div className="shareNote-modal-body-content">
          <Invitees />
          <Recipients />
        </div>
        <div className="shareNote-modal-body-footer">
          <Button
            variant="contained"
            color="primary"
            onClick={this.shareNote}
            disabled={disabled}
          >
            Share
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    note_id: state.modal.data.note_id,
    noteShared: state.notes.flags.noteShared,
    recipients: state.modal.recipients,
    username: state.registration.username,
    sessionToken: state.registration.sessionToken
  };
};

const mapDispatchToProps = {
  shareNote,
  toggleModalView,
  clearRecipients
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareNote);
