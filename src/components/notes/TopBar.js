import React from "react";
import "./TopBar.scss";

class TopBar extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     canEdit: this.props.canEdit,
  //     unshare: this.props.unshare
  //   };
  // }

  editNote = () => {
    // Have the logic to edit a note
  };

  shareNote = () => {
    // Have the logic to share a note
  };

  deleteNote = () => {
    // Have the logic to delete a note
  };

  unshareNote = () => {
    // Have the logic to unshare a note
  };

  render() {
    const { owner, unshare } = this.props;
    let editButton, shareButton, deleteButton, unshareButton;

    if (owner) {
      editButton = (
        <button className="edit" onClick={this.editNote}>
          Edit
        </button>
      );
      shareButton = <button onClick={this.shareNote}>Share</button>;
      deleteButton = <button onClick={this.deleteNote}>Delete</button>;
    }

    if (unshare) {
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
