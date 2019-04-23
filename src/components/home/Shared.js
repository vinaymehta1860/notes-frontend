import React from "react";
import Notes from "../notes/Notes";
import Heading from "./Heading";
import "./shared.scss";

class Shared extends React.Component {
  /*
    This component will get the shared object from HomePage and will go through
    each of the note in that array and render it on the HomePage.
  */

  render() {
    const notesObject = [
      {
        title: "Shared Note",
        desc: "This is the description for note object."
      },
      {
        title: "Shared Note 2",
        desc: "This is the description for note object.",
        canEdit: true
      }
    ];

    return (
      <div className="shared">
        <Heading owner={false} />
        {/* <Notes note={notesObject}></Notes> */}
        {notesObject.map(note => (
          <Notes note={note} key={note.title}>
            {note.title}>
          </Notes>
        ))}
      </div>
    );
  }
}

export default Shared;
