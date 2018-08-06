import * as types from "@src/constants/actionTypes";

export const addTodo = data => ({
  type: types.ADD_TODO,
  data
});
