import AddComponent from "@screens/add/components";
import { connect } from "react-redux";
import { addTodo } from "@screens/add/actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addTheTodo(data) {
    dispatch(addTodo(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComponent);
