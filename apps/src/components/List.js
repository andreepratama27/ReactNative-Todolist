import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const List = ({ id, title, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.list}
      onPress={() => navigation.navigate("Edit", { id })}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    height: 80,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#fff",
    margin: 15,
    marginBottom: 0,
    borderRadius: 4,
    elevation: 4
  }
});

List.propTypes = {
  title: PropTypes.string
};

export default List;
