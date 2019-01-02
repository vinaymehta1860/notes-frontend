import React from 'react';
import Owner from './Owner';
import Shared from './Shared';
import '../../styles/home/homePage.css';
import Modal from '../modals/NewNote';

class HomePage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  handleLogout = () => {
    // Have the logic to handle logout over here
    console.log("This is from the logout function.");
  }

  render() {
    /*
      Inside this fragment, have two self defined components, OWNER & SHARED
      
      Only import owner notes if the user has notes which he ownes. Pass the complete
      owner object from API response to Owner component for it to render it on the home page.
      
      Only import shared notes if the user has shared notes with him. Pass the complete
      shared object from API response to Shared component for it to render it on the home page.
    */

    return (
      <div>
        <button className="action-logout" onClick={this.handleLogout}>Logout</button>

        <Owner></Owner>
        
        <Shared></Shared>

        <Modal />
      </div>
    );
  }
}

export default HomePage;