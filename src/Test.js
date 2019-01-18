import React from 'react';

import { connect } from 'react-redux';

import { changeView } from './redux/actions';

class Test extends React.Component {
  changeText = (e) => {
    this.props.changeView(e.target.value);
  }
  
  render() {
    const text = this.props.text;
    return (
      <div>
        <input type="radio" name="name" value="Vinay" onClick={this.changeText} /> Vinay<br />
        <input type="radio" name="name" value="Vishal" onClick={this.changeText} /> Vishal<br /><br />
        <p>{text}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.view.text
  }
}

const actions = {
  changeView
}

export default connect(mapStateToProps, actions)(Test);