// Libraries
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux';

// Styles
import './App.css';

// Components
import Routes from './Routes';
import Test from './Test';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Test />
      </Provider>
    );
  }
}

export default App;
