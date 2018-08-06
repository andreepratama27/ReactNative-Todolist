import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ navigation }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate("Add")}
  >
    <Text style={styles.text}>Add New Todo</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    height: 60,
    backgroundColor: "mediumseagreen",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#fff",
    fontSize: 18,
    letterSpacing: 1
  }
});

export default Button;
