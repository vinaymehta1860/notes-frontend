import React from "react";
import { connect } from "react-redux";

import "./homePage.scss";
import "./notes.scss";

// Components
import Notes from "../notes/Notes";
import Heading from "./Heading";

class Owner extends React.Component {
  render() {
    const { ownerNotes } = this.props;

    return (
      <div className="notes-owner">
        <div className="notes-owner-header">
          <Heading owner={true} />
        </div>
        <div className="notes-owner-content">
          {ownerNotes.map(note => (
            <Notes note={note} owner={true} key={note.note_id}>
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
    ownerNotes: state.notes.ownerNotes
  };
};

export default connect(
  mapStateToProps,
  {}
)(Owner);
