import React from 'react';
import '../../styles/notes/TopBar.css'

class TopBar extends React.Component {

  editNote = () => {
    // Have the logic to edit a note
  }

  shareNote = () => {
    // Have the logic to share a note
  }

  deleteNote = () => {
    // Have the logic to delete a note
  }

  render() {
    return (
      <React.Fragment>
        <button className="edit" onClick={this.editNote}>Edit</button>
        <button onClick={this.shareNote}>Share</button>
        <button onClick={this.deleteNote}>Delete</button>
      </React.Fragment>
    );
  }
}

export default TopBar;