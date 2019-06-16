import React from "react";
import { connect } from "react-redux";

import "./filter.scss";

import FilterPopover from "./filterPopover";

class Filter extends React.Component {
  render() {
    const { data, callback } = this.props;

    return (
      <div className="notes-filter" onMouseLeave={this.hideFilterPopover}>
        <span>{data.text}</span>
        <FilterPopover data={data} callback={callback} />
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(Filter);
