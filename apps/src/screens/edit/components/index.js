import React, { Component, Fragment } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Switch,
  StyleSheet
} from "react-native";
import PopupDialog, { SlideAnimation } from "react-native-popup-dialog";
import { API } from "@src/services/APIServices";

class EditComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      status: false
    };

    this.updateTodolist = this.updateTodolist.bind(this);
  }

  componentDidMount() {
    const { getParam } = this.props.navigation;

    this.props.readTodo(getParam("id"));
  }

  deleteTodolist() {
    const { getParam } = this.props.navigation;

    API()
      .delete(`todos/${getParam("id")}`)
      .then(res => {
        this.props.deleteTodo(getParam("id"));
        this.props.navigation.goBack();
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateTodolist() {
    this.props.updateTodolist(this.state);
  }

  render() {
    const slideAnimation = new SlideAnimation({
      slideFrom: "bottom"
    });

    return (
      <Fragment>
        <PopupDialog
          width={200}
          height={100}
          dialogStyle={{
            marginTop: -50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          ref={popupDialog => {
            this.popupDialog = popupDialog;
          }}
          dialogAnimation={slideAnimation}
        >
          <View style={styles.dialog}>
            <Text style={styles.textDialog}>Are you sure?</Text>

            <View style={styles.modalWrapper}>
              <TouchableOpacity
                style={styles.cancelModal}
                onPress={() => this.popupDialog.dismiss()}
              >
                <Text style={styles.textCancel}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.deleteTodolist()}>
                <Text style={[styles.deleteText, { fontSize: 18 }]}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </PopupDialog>

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

            <View style={styles.wrapperButton}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.updateTodolist}
              >
                <Text style={styles.text}>UPDATE YOUR THING</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => this.popupDialog.show()}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Fragment>
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
  },
  deleteButton: {
    padding: 10
  },
  deleteText: {
    color: "tomato",
    fontSize: 16
  },
  deleteButton: {
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  wrapperButton: {
    height: 180
  },
  dialog: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  deleteModal: {
    width: 80,
    padding: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "tomato"
  },
  modalWrapper: {
    paddingTop: 20,
    paddingBottom: 10,
    width: 150,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textDialog: {
    fontSize: 18
  },
  textCancel: {
    fontSize: 16
  }
});

export default EditComponent;
