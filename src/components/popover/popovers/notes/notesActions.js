import React from "react";
import { connect } from "react-redux";

import { toggleModalView } from "../../../../redux/actions/modalActions";

import "./notesActions.scss";

class notesActions extends React.Component {
  // This function will be called first and then it'll call
  // other functions based on the type
  actionController = event => {
    // First, disable the popover and then call the apt function
    const { cancelPopover } = this.props;
    cancelPopover(false);

    const type = event.target.innerHTML;
    switch (type) {
      case "Edit":
        this.editNote();
        break;
      case "Share":
        this.shareNote();
        break;
      case "Delete":
        this.deleteNote();
        break;
      case "Unshare":
        this.unshareNote();
        break;
      case "Leave":
        this.leaveNote();
        break;
      default:
        console.log("Unknown action type.");
    }
  };

  editNote = () => {
    const { note_id, title, desc } = this.props.data;

    this.props.toggleModalView(
      { showModal: true, modalView: "editNote", viewSize: "big" },
      { note_id, title, desc }
    );
  };

  shareNote = () => {
    const { note_id, sharedWith } = this.props.data;

    this.props.toggleModalView(
      { showModal: true, modalView: "shareNote", viewSize: "big" },
      { note_id, sharedWith }
    );
  };

  deleteNote = () => {
    const { note_id } = this.props.data;

    this.props.toggleModalView(
      { showModal: true, modalView: "deleteNote", viewSize: "small" },
      { note_id }
    );
  };

  unshareNote = () => {
    const { note_id } = this.props.data;

    this.props.toggleModalView(
      { showModal: true, modalView: "unshareNote", viewSize: "small" },
      { note_id }
    );
  };

  leaveNote = () => {
    const { note_id } = this.props.data;

    this.props.toggleModalView(
      {
        showModal: true,
        modalView: "leaveNote",
        viewSize: "small"
      },
      { note_id }
    );
  };

  render() {
    const { owner, data } = this.props;
    let shared,
      editAction,
      shareAction,
      deleteAction,
      unshareAction,
      leaveAction,
      actions = [];

    shared = data.sharedWith.length > 0 ? true : false;

    editAction = (
      <div
        className="actions-popover-action-item edit-action"
        onClick={this.actionController}
        key="1"
      >
        Edit
      </div>
    );

    shareAction = (
      <div
        className="actions-popover-action-item share-action"
        onClick={this.actionController}
        key="2"
      >
        Share
      </div>
    );

    deleteAction = (
      <div
        className="actions-popover-action-item delete-action"
        onClick={this.actionController}
        key="3"
      >
        Delete
      </div>
    );

    unshareAction = (
      <div
        className="actions-popover-action-item unshare-action"
        onClick={this.actionController}
        key="4"
      >
        Unshare
      </div>
    );

    leaveAction = (
      <div
        className="actions-popover-action-item leave-action"
        onClick={this.actionController}
        key="5"
      >
        Leave
      </div>
    );

    if (owner) {
      actions.push(editAction, shareAction, deleteAction);

      if (shared) {
        actions.push(unshareAction);
      }
    } else {
      actions.push(leaveAction);
    }

    return (
      <React.Fragment>
        <div className="actions-popover-action-list">
          {actions.map(action => {
            return (
              <div className="actions-popover-action" key={Math.random()}>
                {action}
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  toggleModalView
};

export default connect(
  null,
  mapDispatchToProps
)(notesActions);
