import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Switch,
  StyleSheet
} from "react-native";
import { API } from "@src/services/APIServices";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      status: false
    };

    this.addTodolist = this.addTodolist.bind(this);
  }

  addTodolist() {
    API()
      .post("todos", this.state)
      .then(res => {
        this.props.addTheTodo(res.data);
        this.props.navigation.popToTop();
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View>
            <TextInput
              onChangeText={title => this.setState({ title })}
              style={styles.textinput}
              placeholder="Fill your things"
            />
          </View>
          <View>
            <Switch onValueChange={status => this.setState({ status })} />
          </View>

          <View>
            <TouchableOpacity style={styles.button} onPress={this.addTodolist}>
              <Text style={styles.text}>ADD YOUR THING</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDEFEC",
    flex: 1
  },
  wrapper: {
    margin: 20
  },
  textinput: {
    backgroundColor: "#fff",
    height: 50,
    paddingLeft: 20,
    marginBottom: 12
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginTop: 30,
    backgroundColor: "mediumseagreen"
  },
  text: {
    color: "#fff"
  }
});

export default Add;
