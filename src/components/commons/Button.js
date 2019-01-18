import React from 'react';

/*
  This component will require the following props
  props = {
    type -> for various types of buttons
    text -> for the text that should be displayed inside the button
  }
*/

class Button extends React.Component {
  render () {
    return (
      <div className="button-component">
        <button>{this.props.text}</button>
      </div>
    );
  }
}

export default Button;