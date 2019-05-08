import React from "react";
import { Provider } from "react-redux";
import store from "./redux";

import "./App.scss";

// Components
import LandingPage from "./components/LandingPage";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <LandingPage />
      </Provider>
    );
  }
}

export default App;
