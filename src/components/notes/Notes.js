/*
 *  Notes will be passed to this component from Owner & Shared components in the home module.
 */

import React from "react";
import { connect } from "react-redux";

import "./notes.scss";

import Popover from "../popover/popover";

class Notes extends React.Component {
  render() {
    const { owner, note } = this.props;
    let noteOwner;

    if (!owner) {
      const ownerName = note.ownerName;
      noteOwner = (
        <div className="note-title-owner-name">
          <span>{ownerName}'s note</span>
        </div>
      );
    }

    return (
      <div className="note">
        <div className="note-title">
          {noteOwner}
          <div className="note-title-info">
            <span>{note.title}</span>
            <Popover type="notes" owner={owner} data={note} />
          </div>
        </div>
        <div className="note-data">
          <p>{note.desc}</p>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(Notes);
