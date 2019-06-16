import React from "react";
import { connect } from "react-redux";

import "./homePage.scss";
import "./notes.scss";

// Components
import Notes from "../notes/Notes";
import Heading from "./Heading";

class Owner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterValue: null
    };
  }

  toggleFilterValue = value => {
    this.setState({ filterValue: value });
  };

  filterNotes = (filter, notes) => {
    let filteredNotes = new Map();

    notes.forEach((note, note_id) => {
      if (note.group === filter) {
        filteredNotes.set(note_id, note);
      }
    });

    return filteredNotes;
  };

  render() {
    let { ownerNotes } = this.props;
    const { filterValue } = this.state;

    if (filterValue) {
      ownerNotes = this.filterNotes(filterValue, ownerNotes);
    }

    return (
      <div className="notes-owner">
        <div className="notes-owner-header">
          <Heading owner={true} toggleFilterValue={this.toggleFilterValue} />
        </div>
        <div className="notes-owner-content">
          {[...ownerNotes].map(([key, note]) => {
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
    ownerNotes: state.notes.ownerNotes
  };
};

export default connect(
  mapStateToProps,
  {}
)(Owner);
