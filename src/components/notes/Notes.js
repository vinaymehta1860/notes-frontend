/*
 *  Notes will be passed to this component from Owner & Shared components in the home module.
 */

import React from "react";
import TopBar from "./TopBar";
import "./notes.scss";

class Notes extends React.Component {
  render() {
    const { owner } = this.props;

    return (
      <div className="note">
        {owner && (
          <TopBar
            unshare={this.props.unshare}
            owner={owner}
            note={this.props.note}
          />
        )}
        <div className="note-title">
          <p>{this.props.note.title}</p>
        </div>
        <div className="note-data">
          <p>{this.props.note.desc}</p>
        </div>
      </div>
    );
  }
}

export default Notes;
