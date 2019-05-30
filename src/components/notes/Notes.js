/*
 *  Notes will be passed to this component from Owner & Shared components in the home module.
 */

import React from "react";
import { connect } from "react-redux";

import "./notes.scss";

import TopBar from "./TopBar";

class Notes extends React.Component {
  render() {
    const { owner, note } = this.props;

    return (
      <div className="note">
        {owner && (
          <TopBar
            owner={owner}
            note={note}
            shared={note.sharedWith.length > 0}
          />
        )}
        <div className="note-title">
          <p>{note.title}</p>
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
