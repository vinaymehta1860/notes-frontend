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
          {[...sharedNotes].map(([key, note]) => {
            return (
              <Notes note={note} owner={true} key={note.note_id}>
                {note.title}
                {note.desc}
              </Notes>
            );
          })}
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
