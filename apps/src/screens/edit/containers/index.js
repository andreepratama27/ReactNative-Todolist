import EditComponent from "@screens/edit/components";
import { connect } from "react-redux";
import { readTodo, editTodo, deleteTodo } from "@screens/edit/actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  readTodo(data) {
    dispatch(readTodo(data));
  },

  updateTodolist(data) {
    dispatch(editTodo(data));
  },

  deleteTodo(data) {
    dispatch(deleteTodo(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditComponent);
