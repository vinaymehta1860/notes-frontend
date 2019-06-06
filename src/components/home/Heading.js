import React from "react";
import { connect } from "react-redux";

import "./homePage.scss";
import "../commons/forcedStyles.scss";

import Button from "../commons/Button";

import { toggleModalView } from "../../redux/actions/modalActions";

class Heading extends React.Component {
  createNewNote = () => {
    this.props.toggleModalView({
      showModal: true,
      modalView: "newNote",
      viewSize: "big"
    });
  };

  render() {
    const { owner } = this.props;
    let text = "";
    let button = null;

    if (owner) {
      text = "My Notes";
      button = (
        <div className="forced-button">
          <Button
            type="primary"
            text="Create New Note"
            disabled={false}
            onClick={this.createNewNote}
          />
        </div>
      );
    } else {
      text = "Notes Shared with me";
    }

    return (
      <div className="notes-heading">
        <p>{text}</p>
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
)(Heading);
