import React from 'react';
import '../../styles/home/heading.css'

class Heading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      owner: this.props.owner
    }
  }

  newNote = () => {
    // Have the logic to create new note
    console.log("This is from the new note button.");
  }

  render () {
    if( this.state.owner === true ) {
      return (
        <div className="heading">
          <h3 className="title-bar">My Notes</h3>
          <button className="new-note" onClick={this.newNote}>Create New Note</button>
        </div>
      );
    }
    else {
      return (
        <div className="heading">
          <h3 className="title-bar">Shared Notes</h3>
        </div>
      );
    }
  }
}

export default Heading;
