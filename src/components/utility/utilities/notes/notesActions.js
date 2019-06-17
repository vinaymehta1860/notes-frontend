import React from "react";
import { connect } from "react-redux";

import "./notesActions.scss";

// Actions
import { toggleModalView } from "../../../../redux/actions/modalActions";

// SVGS
import Delete from "../../../../assets/svgs/Delete";
import Edit from "../../../../assets/svgs/Edit";
import Leave from "../../../../assets/svgs/Leave";
import Share from "../../../../assets/svgs/Share";
import Unshare from "../../../../assets/svgs/Unshare";

class notesActions extends React.Component {
  editNote = () => {
    const { cancelPopover } = this.props;
    cancelPopover(false);

    const { note_id, title, desc, group } = this.props.data;
    this.props.toggleModalView(
      { showModal: true, modalView: "editNote", viewSize: "big" },
      { note_id, title, desc, group }
    );
  };

  shareNote = () => {
    const { cancelPopover } = this.props;
    cancelPopover(false);

    const { note_id, sharedWith } = this.props.data;
    this.props.toggleModalView(
      { showModal: true, modalView: "shareNote", viewSize: "big" },
      { note_id, sharedWith }
    );
  };

  deleteNote = () => {
    const { cancelPopover } = this.props;
    cancelPopover(false);

    const { note_id } = this.props.data;
    this.props.toggleModalView(
      { showModal: true, modalView: "deleteNote", viewSize: "small" },
      { note_id }
    );
  };

  unshareNote = () => {
    const { cancelPopover } = this.props;
    cancelPopover(false);

    const { note_id } = this.props.data;
    this.props.toggleModalView(
      { showModal: true, modalView: "unshareNote", viewSize: "small" },
      { note_id }
    );
  };

  leaveNote = () => {
    const { cancelPopover } = this.props;
    cancelPopover(false);

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
        title="Edit"
        onClick={this.editNote}
        key="1"
      >
        <Edit />
      </div>
    );

    shareAction = (
      <div
        className="actions-popover-action-item share-action"
        title="Share"
        onClick={this.shareNote}
        key="2"
      >
        <Share />
      </div>
    );

    deleteAction = (
      <div
        className="actions-popover-action-item delete-action"
        title="Delete"
        onClick={this.deleteNote}
        key="3"
      >
        <Delete />
      </div>
    );

    unshareAction = (
      <div
        className="actions-popover-action-item unshare-action"
        title="Un-Share"
        onClick={this.unshareNote}
        key="4"
      >
        <Unshare />
      </div>
    );

    leaveAction = (
      <div
        className="actions-popover-action-item leave-action"
        title="Leave"
        onClick={this.leaveNote}
        key="5"
      >
        <Leave />
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
