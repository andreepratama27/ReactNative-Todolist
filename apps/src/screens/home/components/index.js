import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import List from "@components/List";
import Button from "@components/Button";

class HomeComponents extends Component {
  componentDidMount() {
    this.props.initTodo();
  }

  render() {
    const { todos } = this.props.todos;

    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          {todos && !todos.length ? (
            <View style={styles.notfound}>
              <Text style={{ fontSize: 18 }}>List not found</Text>
            </View>
          ) : (
            todos &&
            todos.map((v, keys) => <List key={keys} {...v} {...this.props} />)
          )}
        </ScrollView>
        <Button {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEFEC"
  },
  notfound: {
    height: 80,
    margin: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});

export default HomeComponents;
