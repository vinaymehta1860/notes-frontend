import React from "react";
import { connect } from "react-redux";

import { toggleModalView } from "../../redux/actions/modalActions";

import "./modal.scss";

// Components
import Button from "@material-ui/core/Button";

class Header extends React.Component {
  onClick = () => {
    this.props.toggleModalView(false, "");
  };

  render() {
    const { showClose, title } = this.props;
    let button = null;

    if (showClose) {
      button = (
        <Button
          variant="outlined"
          className="OutlinedButtons-button-193"
          onClick={this.onClick}
        >
          Close
        </Button>
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
  toggleModalView
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
