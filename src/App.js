import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Routes from './Routes';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
