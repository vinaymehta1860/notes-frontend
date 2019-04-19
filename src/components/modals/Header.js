import React from 'react';

// Components
import Button from '../commons/Button';

class Header extends React.Component {
  render () {
    return (
      <div className="modal-header">
        <h2>{this.props.title}</h2>
        <Button text="Close" />
      </div>
    );
  }
}

export default Header;