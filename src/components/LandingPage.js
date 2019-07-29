import React from 'react';
import { connect } from 'react-redux';

import './landingPage.scss';

// Components
import Registration from './registration/Registration';
import HomePage from './home/HomePage';
import Modal from './modal/Modal';

// Actions
import {
  registerSignIn,
  verifyUser,
  sessionStorageUpdate
} from '../redux/actions';

class LandingPage extends React.Component {
  componentWillMount() {
    this.props.verifyUser();
  }

  componentDidUpdate() {
    const { signedIn } = this.props;
    // Change the flag that sessionToken is stored in localStorage
    if (!signedIn) {
      this.props.sessionStorageUpdate(false);
      localStorage.removeItem('firstname');
    }
  }

  render() {
    const { signedIn, showModal } = this.props;

    return (
      <div className="landing">
        {showModal && <Modal />}
        {!signedIn && <Registration />}
        {signedIn && <HomePage />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showModal: state.modal.config.showModal,
    signedIn: state.registration.signedIn
  };
};

const mapDispatchToProps = {
  registerSignIn,
  verifyUser,
  sessionStorageUpdate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
