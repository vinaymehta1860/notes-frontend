import React from 'react';
//import Modal from '../modals/Modal';
import '../../styles/home/heading.css'

class Heading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      owner: this.props.owner,
      newNote: false
    }
  }

  newNote = () => {
    // Have the logic to create new note
    console.log("This is from the new note button.");
    //this.setState({newNote: true});
    document.getElementsByClassName("modal")[0].style.display = "block";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  render () {
    // const modal = {
    //   includeBottomBar: true
    // }

    if( this.state.owner === true && !this.state.newNote) {
      return (
        <div className="heading">
          <h3 className="title-bar">My Notes</h3>
          <button className="new-note" onClick={this.newNote}>Create New Note</button>
        </div>
      );
    }
    // else if(this.state.newNote) {
    //   return (
    //     <Modal title="New Note" 
    //       close={true} cancel={false} success={false} successButtonText="Create New Note" modal={modal}
    //       style={{display: "block"}}  
    //     />
    //   );
    // }
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
