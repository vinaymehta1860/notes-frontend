import React from 'react';
import '../../styles/modals/newNote.css';

class NewNote extends React.Component {
  closeModal = () => {
    // Have the logic to close the modal here
    console.log("This is from the close modal button.");
    document.getElementsByClassName("modal")[0].style.display = "none";
    document.body.style.backgroundColor = "white";
  }

  createNote = () => {
    // Have the logic to create new note here
    console.log("This is from the new note button.");
    
    // After calling the API to create a note, close the modal
    document.getElementsByClassName("modal")[0].style.display = "none";
    document.body.style.backgroundColor = "white";
  }
  
  render() {
    return (
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-heading">New Note</h3>
          <button className="modal-close" onClick={this.closeModal}>Close</button>
        </div>
        <div className="modal-content">
          <p>Title:</p>
          <input type="text" className="note-title" placeholder="Title of note"/>
          <p>Description:</p>
          <input type="text" className="note-description" placeholder="Description of note"/>
        </div>
        <div className="modal-footer">
          <button className="create-new-note" onClick={this.createNote}> Create Note</button>
        </div>
      </div>
    );
  }
}

export default NewNote;