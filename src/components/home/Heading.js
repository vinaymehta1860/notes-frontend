import React from "react";
import { connect } from "react-redux";

import "./homePage.scss";
import "../commons/forcedStyles.scss";

import Utility from "../utility/utility";
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
    const { owner, toggleFilterValue } = this.props;
    let text, button;
    let data = {
      defaultText: "Group",
      text: "Filter By: "
    };

    if (owner) {
      text = "My Notes";
      button = (
        <div className="forced-button">
          <Button
            type="primary"
            text="New Note"
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
        <div className="notes-heading-left-pane">
          <p>{text}</p>
        </div>
        <div className="notes-heading-right-pane">
          {owner && (
            <Utility
              type="filter-utility"
              data={data}
              callback={toggleFilterValue}
            />
          )}
          {button}
        </div>
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
