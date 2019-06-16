/*
 * This component will serve as a controller for all the various types of utility components.
 * It'll get what type of component to render from the parent component and
 * render them accordingly.
 * Different utility components will be imported to this file and then served to parent component.
 *
 * List of currently supported utility components:
 *  1) Notes actions popover
 *  2) Filter component
 *
 * This component will accept 3 things as props and pass them accordingly:
 *  1) type (String)      : what utility component does the owner wants to integrate
 *  2) data (Object)      : an object that has all the data that needs to be passed along
 *  3) callback (function): a callback that needs to be passed by the parent component to handle
 *                          user interaction
 */
import React from "react";
import { connect } from "react-redux";

// Popovers
import NotesPopover from "./utilities/notes/notesPopover";
import Filter from "./utilities/filter/filter";

class Utility extends React.Component {
  render() {
    const { type, data, callback } = this.props;
    let utility;

    switch (type) {
      case "notes-utility":
        utility = <NotesPopover type={type} data={data} />;
        break;
      case "filter-utility":
        utility = <Filter data={data} callback={callback} />;
        break;
      default:
        console.log("Incorrect popover type passed.");
    }

    return <React.Fragment>{utility}</React.Fragment>;
  }
}

export default connect(
  null,
  {}
)(Utility);
