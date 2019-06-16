import React from "react";
import { connect } from "react-redux";

import "./modal.scss";

// Modal Components
import Header from "./Header";
import NewNote from "./modals/newNote/NewNote";
import EditNote from "./modals/editNote/EditNote";
import DeleteNote from "./modals/deleteNote/DeleteNote";
import ShareNote from "./modals/shareNote/ShareNote";
import UnshareNote from "./modals/unshareNote/UnshareNote";
import LeaveNote from "./modals/leaveNote/LeaveNote";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.propsMap = this.buildPropsMap();
  }

  buildPropsMap = () => {
    const propsMap = {
      newNote: {
        header: { title: "New Note", showClose: true },
        content: NewNote
      },
      editNote: {
        header: { title: "Edit Note", showClose: true },
        content: EditNote
      },
      deleteNote: {
        header: { title: "Delete Note", showClose: false },
        content: DeleteNote
      },
      shareNote: {
        header: { title: "Share Note", showClose: true },
        content: ShareNote
      },
      unshareNote: {
        header: { title: "Unshare Note", showClose: false },
        content: UnshareNote
      },
      leaveNote: {
        header: { title: "Leave Note", showClose: false },
        content: LeaveNote
      }
    };

    return propsMap;
  };

  renderHeader = () => {
    const viewProps = this.propsMap[this.props.config.modalView].header;
    return <Header {...viewProps} />;
  };

  renderContent = () => {
    const Component = this.propsMap[this.props.config.modalView].content;

    return <Component />;
  };

  buildClassList = () => {
    let classes = [];
    const { viewSize } = this.props.config;

    if (viewSize === "big") {
      classes.push("modalsize-big");
    } else if (viewSize === "small") {
      classes.push("modalsize-small");
    }

    return classes.join(" ");
  };

  render() {
    const { showModal } = this.props.config;
    return (
      <div className="inhouse-modal">
        {showModal && (
          <div className={`inhouse-modal-content ${this.buildClassList()}`}>
            {this.renderHeader()}
            {this.renderContent()}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    config: state.modal.config
  };
};

export default connect(
  mapStateToProps,
  {}
)(Modal);
