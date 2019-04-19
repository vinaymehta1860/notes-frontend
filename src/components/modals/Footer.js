import React from 'react';

// Components
import Button from '../commons/Button';

class Footer extends React.Component {
  render () {
    return (
      <div className="modal-footer">
        <Button text="Close" />
      </div>
    );
  }
}

export default Footer;