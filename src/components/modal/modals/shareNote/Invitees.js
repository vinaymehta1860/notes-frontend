import React from "react";
import { connect } from "react-redux";

class Invitees extends React.Component {
  render() {
    const { sharedWith } = this.props;
    let count = 0,
      inviteeElem;

    if (sharedWith.length > 0) {
      inviteeElem = (
        <div className="shareNote-modal-body-invitees">
          <span className="shareNote-modal-body-invitees-header">
            Shared with:{" "}
          </span>
          <div className="shareNote-modal-body-invitee-list">
            {sharedWith.map(invitee => {
              return (
                <p className="shareNote-modal-body-invitee" key={++count}>
                  {invitee}
                </p>
              );
            })}
          </div>
        </div>
      );
    }

    return <React.Fragment>{inviteeElem}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    sharedWith: state.modal.data.sharedWith
  };
};

export default connect(
  mapStateToProps,
  {}
)(Invitees);
