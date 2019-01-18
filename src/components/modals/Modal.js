// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Components
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

// Redux-Actions
import { changeView } from '../../redux/actions';

// Styles

class Modal extends React.Component {
  render() {
    return (
      <div className="modal">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

const actions = {
  changeView
}

const mapStateToProps = state => {
  return {
    name: state.name
  }
}

export default connect(mapStateToProps, actions)(Modal);