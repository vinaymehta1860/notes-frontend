import React from "react";
import { connect } from "react-redux";

import "./filterPopover.scss";

// SVGS
import RightTick from "../../../../assets/svgs/RightTick";
import Cross from "../../../../assets/svgs/Cross";
import DownArrow from "../../../../assets/svgs/DownArrow";
import UpArrow from "../../../../assets/svgs/UpArrow";

class FilterPopover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _isApplied: false,
      _isOpen: false,
      _value: null
    };
  }

  componentDidMount() {
    const { data, groups } = this.props;

    if (groups.includes(data.defaultText)) {
      this.setState({ _isApplied: true, _value: data.defaultText });
    }
  }

  removeFilter = () => {
    const { callback } = this.props;

    callback(null);
    this.setState({ _isApplied: false, _isOpen: false, _value: null });
  };

  showGroupsToFilterBy = () => {
    const { _isOpen } = this.state;

    this.setState({ _isOpen: !_isOpen });
  };

  onFilterSelect = event => {
    const { callback } = this.props;

    this.setState({
      _isApplied: true,
      _isOpen: false,
      _value: event.target.innerText
    });
    callback(event.target.innerText);
  };

  buildClassList = () => {
    const { _isApplied } = this.state;
    let classes = [];

    if (!_isApplied) {
      classes.push("no-filter-value");
    }

    return classes.join("");
  };

  render() {
    const { data, groups } = this.props;
    const { _isApplied, _isOpen } = this.state;
    let { _value } = this.state;

    if (_value === null) {
      _value = data.defaultText;
    }

    return (
      <div className="notes-filter-container">
        <div
          className={`filter-container-current-value ${this.buildClassList()}`}
          onClick={this.showGroupsToFilterBy}
        >
          <span>{_value}</span>
          {_isOpen && (
            <div className="filter-popover-list">
              {groups.map(group => {
                return (
                  <div
                    className={`filter-popover-list-item ${this.buildClassList()}`}
                    key={group}
                    onClick={this.onFilterSelect}
                  >
                    {_isApplied && (
                      <div className="filter-selection-checkmark">
                        {_isApplied && _value === group && <RightTick />}
                      </div>
                    )}
                    {group}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div
          className="filter-container-dropdown"
          onClick={this.showGroupsToFilterBy}
        >
          {!_isOpen && <DownArrow />}
          {_isOpen && <UpArrow />}
        </div>
        {_isApplied && (
          <div className="filter-container-clear" onClick={this.removeFilter}>
            <Cross />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    groups: state.registration.groups
  };
};

export default connect(
  mapStateToProps,
  {}
)(FilterPopover);
