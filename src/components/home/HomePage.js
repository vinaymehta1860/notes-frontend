/*
 *  Inside this component, there are two self defined components, OWNER & SHARED
 *
 *  Only import owner notes if the user has notes which he ownes. Pass the complete
 *  owner object from API response to Owner component for it to render it on the home page.
 *
 *  Only import shared notes if the user has shared notes with him. Pass the complete
 *  shared object from API response to Shared component for it to render it on the home page.
 */
import React from 'react';
import { connect } from 'react-redux';

// Styles
import './homePage.scss';
import './notes.scss';
import '../commons/forcedStyles.scss';

// Components
import Owner from './Owner';
import Shared from './Shared';
import Button from '../commons/Button';

// Actions
import {
  toggleLoading,
  sessionStorageUpdate,
  logoutUser
} from '../../redux/actions';

import { getAllNotes } from '../../redux/actions/notesActions';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.toggleLoading();
  }

  componentDidMount() {
    // Get all the notes when this component mounts
    const { email, sessionToken } = this.props;

    this.props.getAllNotes(email, sessionToken);
  }

  toggleLoading = () => {
    const {
      firstname,
      signedIn,
      sessionToken,
      sessionTokenStored
    } = this.props;

    if (signedIn && sessionTokenStored === false) {
      // Directly store the firstname in localStorage without hashing.
      localStorage.setItem('firstname', firstname);

      // Change the flag that firstname has been stored in localStorage.
      this.props.sessionStorageUpdate(true);
    }
  };

  handleLogout = () => {
    const { email, sessionToken } = this.props;
    this.props.logoutUser(email, sessionToken);
  };

  render() {
    const { firstname } = this.props;

    return (
      <div className="homepage">
        <div className="homepage-header">
          <div className="homepage-header-greeting">
            {firstname && <p>Hi {firstname}..!!</p>}
          </div>
          <div className="homepage-header-logout">
            <Button
              type="secondary"
              text="Logout"
              disabled={false}
              onClick={this.handleLogout}
            />
          </div>
        </div>
        <div className="homepage-content">
          <Owner />
          <Shared />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.registration.email,
    firstname: state.registration.firstname,
    loading: state.registration.loading,
    signedIn: state.registration.signedIn,
    sessionToken: state.registration.sessionToken,
    sessionTokenStored: state.registration.sessionTokenStored
  };
};

const mapDisptachToProps = {
  toggleLoading,
  sessionStorageUpdate,
  logoutUser,
  getAllNotes
};

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(HomePage);
