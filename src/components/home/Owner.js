import React from "react";
import Notes from "../notes/Notes";
import Heading from "./Heading";
import "./owner.scss";

class Owner extends React.Component {
  /*
    This component will get the owner object from HomePage and will go through
    each of the note in that array and render it on the HomePage.
  */

  render() {
    const notesObject = [
      {
        title: "Owner Note",
        desc: "This is the description for note object.",
        canEdit: true
      },
      {
        title: "Owner Note 2",
        desc: "This is second note for owner.",
        canEdit: true
      },
      {
        title: "Owner Note 3",
        desc: "This is third note for owner.",
        canEdit: true
      }
    ];

    return (
      <div className="owner">
        <Heading owner={true} onClick={this.props.onClick} />
        {/* <Notes notes={this.props.notes}></Notes> */}
        {notesObject.map(note => (
          <Notes note={note} unshare={true} key={note.title}>
            {note.title}>
          </Notes>
        ))}
      </div>
    );
  }
}

export default Owner;
