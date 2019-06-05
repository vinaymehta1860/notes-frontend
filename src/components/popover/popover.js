/*
  This component is responsible for attaching the popover(/dropdown) menu
  on to other components.

  It can be configured to popover any type of popover menun depending on the
  value of prop (type) passed by the parent component. Currently there's support
  for only one type
  --> notes -> Popover actions that can be performed on notes
 */

import React from "react";
import { connect } from "react-redux";

import "./popover.scss";

// Popover Components
import NotesActions from "./popovers/notes/notesActions";

class Popover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _isOpen: false,
      _type: "",
      _data: {}
    };
  }

  togglePopover = () => {
    const { type, data } = this.props;

    this.setState({ _isOpen: true, _type: type, _data: data });
  };

  cancelPopover = () => {
    this.setState({ _isOpen: false, _type: "", _data: {} });
  };

  buildClassList = () => {
    const { _isOpen } = this.state;
    let classes = [];

    if (_isOpen) {
      classes.push("popover-icons-open");
    }

    return classes.join("");
  };

  render() {
    const { owner } = this.props;
    const { _isOpen, _type, _data } = this.state;
    let popoverActions;

    if (_isOpen) {
      switch (_type) {
        case "notes":
          popoverActions = (
            <NotesActions
              owner={owner}
              data={_data}
              cancelPopover={this.cancelPopover}
            />
          );
          break;
      }
    }

    return (
      <div
        className="popover-icons-container"
        onMouseLeave={this.cancelPopover}
      >
        <div
          className={`popover-icons ${this.buildClassList()}`}
          onMouseEnter={this.togglePopover}
        >
          <div className="popover-icon" />
          <div className="popover-icon" />
          <div className="popover-icon" />
        </div>
        <div className="popover-icons-actions">{popoverActions}</div>
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(Popover);
