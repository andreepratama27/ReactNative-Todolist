import React, { Component } from "react";
import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import configureStore from "@src/store/configureStore";

const { store } = configureStore();

class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => AppContainer);
