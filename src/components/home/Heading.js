import React from "react";
import { connect } from "react-redux";

import "./homePage.scss";
import "../commons/forcedStyles.scss";

import Button from "@material-ui/core/Button";

import { toggleModalView } from "../../redux/actions/modalActions";

class Heading extends React.Component {
  createNewNote = () => {
    this.props.toggleModalView(true, "newNote");
  };

  render() {
    const { owner } = this.props;
    let text = "";
    let button = null;

    if (owner) {
      text = "My Notes";
      button = (
        <Button
          variant="contained"
          color="primary"
          onClick={this.createNewNote}
        >
          Create New Note
        </Button>
      );
    } else {
      text = "Notes Shared with me";
    }

    return (
      <div className="notes-heading">
        <h2>{text}</h2>
        <div className="forced-button">{button}</div>
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
)(Heading);
