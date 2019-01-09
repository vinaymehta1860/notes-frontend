import React from 'react';
import '../../styles/notes/TopBar.css';

class TopBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      canEdit: this.props.canEdit,
      unshare: this.props.unshare
    }
  }

  editNote = () => {
    // Have the logic to edit a note
  }

  shareNote = () => {
    // Have the logic to share a note
  }

  deleteNote = () => {
    // Have the logic to delete a note
  }

  unshareNote = () => {
    // Have the logic to unshare a note
  }

  render() {
    const canEdit = this.state.canEdit, unshare = this.state.unshare;
    let editButton, shareButton, deleteButton, unshareButton;

    if(canEdit) {
      editButton = <button className="edit" onClick={this.editNote}>Edit</button>;
      shareButton = <button onClick={this.shareNote}>Share</button>;
      deleteButton = <button onClick={this.deleteNote}>Delete</button>;
    }

    if(unshare) {
      unshareButton = <button onClick={this.unshareNote}>Unshare</button>;
    }

    return (
      <div className="action-bar">
        {editButton}
        {shareButton}
        {deleteButton}
        {unshareButton}
      </div>
    );
  }
}

export default TopBar;