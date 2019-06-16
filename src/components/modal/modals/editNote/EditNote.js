import React from "react";
import { connect } from "react-redux";
import ContentEditable from "react-sane-contenteditable";

import "./editNote.scss";

// Components
import Button from "../../../commons/Button";
import Utility from "../../../utility/utility";

// Actions
import { editNote } from "../../../../redux/actions/notesActions";
import { toggleModalView } from "../../../../redux/actions/modalActions";

class EditNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _noteTitle: this.props.title,
      _noteBody: this.props.desc,
      _noteGroup: this.props.group
    };
  }

  toggleGroupName = value => {
    this.setState({ _noteGroup: value });
  };

  editNote = () => {
    const { note_id, email, sessionToken, group } = this.props;
    const { _noteTitle, _noteBody, _noteGroup } = this.state;

    this.props.editNote(email, sessionToken, {
      note_id,
      title: _noteTitle,
      desc: _noteBody,
      ...(group !== _noteGroup && { group: _noteGroup })
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
    const { _noteTitle, _noteBody, _noteGroup } = this.state;
    let disabled = false;

    if (_noteTitle === "") {
      disabled = true;
    }

    let data = {
      ...((_noteGroup === null || _noteGroup === undefined) && {
        defaultText: "Select"
      }),
      ...(_noteGroup && { defaultText: _noteGroup }),
      text: "Group: "
    };

    return (
      <div className="editNote-body">
        <div className="editNote-content">
          <div className="editNote-content-title-container">
            <div className="editNote-content-title-bar">
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
          <div className="editNote-content-body">
            <span>Note Body:</span>
            <ContentEditable
              className="editNote-content-body-editable"
              content={_noteBody}
              data-placeholder="Enter note contents here"
              editable={true}
              multiLine={true}
              maxLength={1000}
              onChange={this.onNoteBodyChange}
            />
          </div>
        </div>
        <div className="editNote-footer">
          <Button
            type="primary"
            text="Edit Note"
            onClick={this.editNote}
            disabled={disabled}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    desc: state.modal.data.desc,
    email: state.registration.email,
    group: state.modal.data.group,
    note_id: state.modal.data.note_id,
    sessionToken: state.registration.sessionToken,
    title: state.modal.data.title
  };
};

const mapDispatchToProps = {
  editNote,
  toggleModalView
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditNote);
