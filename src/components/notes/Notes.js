import React from 'react';
import TopBar from './TopBar';

class Notes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TopBar></TopBar>

        <div className="titleBar"> {this.props.notes.title} </div>
        <div className="description"> {this.props.notes.desc} </div>
        
      </React.Fragment>
    );
  }
}

export default Notes;