import React from "react";

import "./Button.css";

/*
  This component will require the following props
  props = {
    type -> Currently only 'primary' type is supported
    text -> for the text that should be displayed inside the button
    disabled -> true/false
    onClick -> function to be called upon click of this button
  }
*/

class Button extends React.Component {
  buildClassList = () => {
    const { disabled } = this.props;
    let classes = [];

    if (disabled) {
      classes.push("button-disabled");
    }

    return classes.join(" ");
  };

  onClick = () => {
    const { disabled } = this.props;

    if (disabled) {
      return;
    }

    this.props.onClick();
  };

  render() {
    return (
      <div
        className={`button-component ${this.buildClassList()}`}
        onClick={this.onClick}
      >
        {this.props.text}
      </div>
    );
  }
}

export default Button;
