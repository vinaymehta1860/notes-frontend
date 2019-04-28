import React from "react";
import ReactModal from "react-modal";
import { connect } from "react-redux";

import "./modal.scss";

// Modal Header
import Header from "./Header";

// Modal Contents
import NewNote from "./modals/newNote/NewNote";
import EditNote from "./modals/editNote/EditNote";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.propsMap = this.buildPropsMap();
  }

  buildPropsMap = () => {
    const propsMap = {
      newNote: {
        header: { title: "Create New Note", showClose: true },
        content: NewNote
      },
      editNote: {
        header: { title: "Edit Note", showClose: true },
        content: EditNote
      }
    };

    return propsMap;
  };

  renderHeader = () => {
    const viewProps = this.propsMap[this.props.modalView].header;

    return <Header {...viewProps} />;
  };

  renderContent = () => {
    const Component = this.propsMap[this.props.modalView].content;

    return <Component />;
  };

  render() {
    const { showModal } = this.props;
    return (
      <div>
        {showModal && (
          <ReactModal
            isOpen={this.props.showModal}
            contentLabel="Modal #1 Global Style Override Example"
            onRequestClose={this.handleCloseModal}
            ariaHideApp={false}
          >
            <div className="notes-modal">
              <div className="notes-modal-content">
                {this.renderHeader()}
                {this.renderContent()}
              </div>
            </div>
          </ReactModal>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modalView: state.modal.modalView,
    showModal: state.modal.showModal
  };
};

export default connect(
  mapStateToProps,
  {}
)(Modal);
