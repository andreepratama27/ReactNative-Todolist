import React, { Component, Fragment } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Navigations } from "@src/navigations";
import AppWithNavigationState from "@src/navigations/NavContainer";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigations />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
