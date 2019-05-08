import React from "react";
import { connect } from "react-redux";
import ContentEditable from "react-sane-contenteditable";
import Button from "@material-ui/core/Button";

import "./newNote.scss";

// Actions
import { createNewNote } from "../../../../redux/actions/notesActions";
import { toggleModalView } from "../../../../redux/actions/modalActions";

class NewNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _noteTitle: "",
      _noteBody: ""
    };
  }

  createNote = () => {
    const { username, sessionToken } = this.props;
    const { _noteTitle, _noteBody } = this.state;

    this.props.createNewNote(username, sessionToken, {
      title: _noteTitle,
      desc: _noteBody
    });

    this.props.toggleModalView(false, "");
  };

  onNoteTitleChange = event => {
    this.setState({ _noteTitle: event.target.value });
  };

  onNoteBodyChange = (event, value) => {
    this.setState({ _noteBody: value });
  };

  render() {
    const { _noteTitle, _noteBody } = this.state;
    let disabled = false;

    if (_noteTitle === "" || _noteBody === "") {
      disabled = true;
    }

    return (
      <div className="newNote-body">
        <div className="newNote-content">
          <div className="newNote-content-title">
            <span>Title: </span>
            <input
              type="text"
              value={_noteTitle}
              onChange={this.onNoteTitleChange}
              placeholder="Note title"
              autoFocus
            />
          </div>
          <div className="newNote-content-body">
            <span>Note Body:</span>
            <ContentEditable
              className="newNote-content-body-editable"
              content={this.state._noteBody}
              data-placeholder="Enter note contents here"
              editable={true}
              multiLine={true}
              maxLength={1000}
              onChange={this.onNoteBodyChange}
            />
          </div>
        </div>
        <div className="newNote-footer">
          <Button
            variant="contained"
            color="primary"
            onClick={this.createNote}
            disabled={disabled}
          >
            Create Note
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sessionToken: state.registration.sessionToken,
    username: state.registration.username
  };
};

const mapDispatchToProps = {
  createNewNote,
  toggleModalView
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNote);
