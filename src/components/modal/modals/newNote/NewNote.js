import React from "react";
import { connect } from "react-redux";
import ContentEditable from "react-sane-contenteditable";

import "./newNote.scss";

// Components
import Button from "../../../commons/Button";
import Utility from "../../../utility/utility";

// Actions
import { createNewNote } from "../../../../redux/actions/notesActions";
import { toggleModalView } from "../../../../redux/actions/modalActions";

class NewNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _noteTitle: "",
      _noteBody: "",
      groupName: null
    };
  }

  toggleGroupName = value => {
    this.setState({ groupName: value });
  };

  createNote = () => {
    const { email, firstname, lastname, sessionToken } = this.props;
    const { _noteTitle, _noteBody, groupName } = this.state;

    this.props.createNewNote(email, sessionToken, {
      title: _noteTitle,
      desc: _noteBody,
      group: groupName,
      ownerName: firstname + " " + lastname
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
    const { _noteTitle } = this.state;
    let disabled = false;

    let data = {
      defaultText: "Select",
      text: "Group: "
    };

    if (_noteTitle === "") {
      disabled = true;
    }

    return (
      <div className="newNote-body">
        <div className="newNote-content">
          <div className="newNote-content-title-container">
            <div className="newNote-content-title-bar">
              <span>Title: </span>
              <input
                type="text"
                value={_noteTitle}
                onChange={this.onNoteTitleChange}
                placeholder="Note title"
                autoFocus
              />
            </div>
            <div className="editNote-content-utility">
              <Utility
                type="filter-utility"
                data={data}
                callback={this.toggleGroupName}
              />
            </div>
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
            type="primary"
            text="Create Note"
            onClick={this.createNote}
            disabled={disabled}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.registration.email,
    firstname: state.registration.firstname,
    lastname: state.registration.lastname,
    sessionToken: state.registration.sessionToken
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
