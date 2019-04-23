import React from "react";
import TopBar from "./TopBar";
import "./notes.scss";

class Notes extends React.Component {
  /*
    Notes will be passed to this component from Owner & Shared components in the home module.
  */

  // constructor(props) {
  //   super(props);

  //   this.props = {
  //     notes: {
  //       title: "Test Title",
  //       desc: "Test description.!"
  //     }
  //   }
  // }

  render() {
    return (
      <div className="note">
        <TopBar
          canEdit={this.props.note.canEdit}
          unshare={this.props.unshare}
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
