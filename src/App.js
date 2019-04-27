// Libraries
import React from "react";
import { Provider } from "react-redux";
import store from "./redux";

// Styles
import "./App.scss";

// Components
import LandingPage from "./components/LandingPage";
import Modal from "./components/modal/Modal";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <LandingPage />
        <Modal />
      </Provider>
    );
  }
}

export default App;
