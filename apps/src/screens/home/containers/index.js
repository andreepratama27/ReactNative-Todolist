import HomeComponent from "@screens/home/components/";
import { initTodo } from "@screens/home/actions/";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  initTodo(data) {
    dispatch(initTodo(data));
  },
  readTodo(id) {
    dispatch(readTodo(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
