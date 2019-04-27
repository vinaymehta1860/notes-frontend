import React from "react";
import { connect } from "react-redux";

import "./homePage.scss";
import "./notes.scss";

import Notes from "../notes/Notes";
import Heading from "./Heading";

class Shared extends React.Component {
  render() {
    const { sharedNotes } = this.props;

    return (
      <div className="notes-shared">
        <div className="notes-shared-header">
          <Heading owner={false} />
        </div>
        <div className="notes-shared-content">
          {sharedNotes.map(note => (
            <Notes note={note} key={note.title}>
              {note.title}>
            </Notes>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sharedNotes: state.notes.sharedNotes
  };
};

export default connect(
  mapStateToProps,
  {}
)(Shared);
