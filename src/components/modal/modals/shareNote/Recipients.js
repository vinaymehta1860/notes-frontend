import React from "react";
import { connect } from "react-redux";

import { addRecipient } from "../../../../redux/actions/modalActions";

class Recipients extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _recipient: ""
    };
  }

  onChange = event => {
    this.setState({ _recipient: event.target.value });
  };

  onKeyPress = event => {
    const { key } = event;

    switch (key) {
      case ",":
      case ";":
      case " ":
      case "Enter":
        const { _recipient } = this.state;

        if (_recipient !== "") {
          this.props.addRecipient(_recipient);
          this.setState({ _recipient: "" });
        }
        break;
    }
  };

  onBlur = () => {
    const { _recipient } = this.state;

    if (_recipient !== "") {
      this.props.addRecipient(_recipient);
      this.setState({ _recipient: "" });
    }
  };

  render() {
    const { _recipient } = this.state;
    const { recipients } = this.props;
    let recipientElem,
      count = 0;

    if (recipients.length > 0) {
      recipientElem = (
        <div className="shareNote-modal-body-recipients-body">
          <span className="shareNote-modal-body-recipients-list-header">
            Recipients:{" "}
          </span>
          <div className="shareNote-modal-body-recipients-list">
            {recipients.map(recipient => {
              return (
                <p className="shareNote-modal-body-recipient" key={++count}>
                  {recipient}
                </p>
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <div className="shareNote-modal-body-recipients">
        <div className="shareNote-modal-body-recipients-input">
          <span>With: </span>
          <input
            type="text"
            value={_recipient}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
            onBlur={this.onBlur}
            placeholder="Enter email to share your note with"
            autoFocus
          />
        </div>
        {recipientElem}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipients: state.modal.recipients
  };
};

const mapDispatchToProps = {
  addRecipient
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipients);
