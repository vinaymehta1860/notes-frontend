import React from 'react';
import NewNote from './NewNote';
// IMP: Need to import CSS styles

/*
  This is the parent class for including the modal. Required params are:
  {
    title : String that should be displayed at the top of modal
    close : Boolean value indicating if the close button should be included or not in top bar
    cancel: Boolean value indicating if the cancel button should be included or not in bottom bar
    success: Boolean value indicating if the success button should be included or not in bottom bar
    successButtonText: String value indicating the text that should be displayed inside the button
    modal: {
      includeBottomBar: Boolean value indicating whether to include the bottomBar from this modal
        or from the one that is going to be invoked
    }
  }
*/

class Modal extends React.Component {

  constructor(props) {
    super(props);

    console.log("This is from the constructor of modal class.");
  }

  /*closeModal = () => {
    // Have the logic to close the modal here
    console.log("This is from the close modal button.");
    document.getElementsByClassName("modal")[0].style.display = "none";
    document.body.style.backgroundColor = "white";
  }*/

  getModaltoInvoke = (modalName, includeBottomBar) => {
    // As the modals keeps on adding, include them in switch cases.
    switch(modalName) {
      case 'NewNote':
        return <NewNote includeBottomBar={includeBottomBar}/>;
      default:
        return this.showError();
    }
  }

  showError = () => {
    return (
      <h2>There is an error in passing the name of modal to invoke.</h2>
    );
  }

  render() {
    const title = this.props.title, close = this.props.closeButton;
    const cancel = this.props.cancelButton;
    const success = this.props.successButton, successButtonText = this.props.successButtonText;
    const ModaltoImport = this.props.modal.type, includeBottomBar = this.props.modal.includeBottomBar;
    let closeButton, cancelButton, successButton;

    if(close) {
      closeButton = <button className="modal-close" onClick={this.props.modal.hideNote}>Close</button>;
    }

    if(cancel && !includeBottomBar) {
      cancelButton = <button className="modal-cancel" onClick={this.closeModal}>Cancel</button>
    }

    if(success && !includeBottomBar) {
      successButton = <button className="modal-success" onClick={this.closeModal}>{successButtonText}</button>
    }

    return (
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-heading">{title}</h3>
          {closeButton}
        </div>
        {this.getModaltoInvoke(ModaltoImport, includeBottomBar)}
        {cancel && success && !includeBottomBar &&
          <div className="modal-footer">
            {cancelButton}
            {successButton}
          </div>
        }
      </div>
    );
  }
}

export default Modal;
