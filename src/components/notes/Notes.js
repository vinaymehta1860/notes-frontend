/*
 *  Notes will be passed to this component from Owner & Shared components in the home module.
 */

import React from "react";
import TopBar from "./TopBar";
import "./notes.scss";

class Notes extends React.Component {
  render() {
    return (
      <div className="note">
        <TopBar
          unshare={this.props.unshare}
          owner={this.props.owner}
          note={this.props.note}
        />

        <div className="note-data">
          <h3>{this.props.note.title}</h3>
          <p>{this.props.note.desc}</p>
        </div>
      </div>
    );
  }
}

export default Notes;
