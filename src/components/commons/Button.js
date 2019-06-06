import React from "react";

import "./Button.scss";

/*
  This component will require the following props
  props = {
    type -> primary / secondary
    text -> text that should be displayed inside the button
    disabled -> true / false
    onClick -> function to be called upon click of this button
  }
*/

class Button extends React.Component {
  buildClassList = () => {
    const { type, disabled } = this.props;
    let classes = [];

    switch (type) {
      case "primary":
        classes.push("button-primary");
        break;
      case "secondary":
        classes.push("button-secondary");
        break;
      case "transparent":
        classes.push("button-transparent");
        break;
      default:
        console.log("Unknown button type. Type received: " + type);
    }

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
        {this.props.text.toUpperCase()}
      </div>
    );
  }
}

export default Button;
