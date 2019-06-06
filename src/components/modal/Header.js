import React from "react";
import { connect } from "react-redux";

import {
  toggleModalView,
  clearRecipients
} from "../../redux/actions/modalActions";

import "./modal.scss";

// Components
import Button from "../commons/Button";

class Header extends React.Component {
  onClick = () => {
    this.props.toggleModalView(false, "", {});
    // TODO: Move the recipients list to modalReducer and have one function to clear
    //  all the modal state variable values
    this.props.clearRecipients();
  };

  render() {
    const { showClose, title } = this.props;
    let button = null;

    if (showClose) {
      button = (
        <Button
          type="transparent"
          text="Close"
          onClick={this.onClick}
          disabled={false}
        />
      );
    }

    return (
      <div className="notes-modal-header">
        <h3>{title}</h3>
        {button}
      </div>
    );
  }
}

const mapDispatchToProps = {
  toggleModalView,
  clearRecipients
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
