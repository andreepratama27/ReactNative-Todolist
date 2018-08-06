import * as types from "@src/constants/actionTypes";
import { API } from "@src/services/APIServices";

export const readTodo = data => {
  return dispatch => {
    API()
      .get(`todos/${data}`)
      .then(res => {
        dispatch({ type: types.READ_TODO, data: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const editTodo = data => {
  return {
    type: types.EDIT_TODO,
    data
  };
};

export const deleteTodo = data => {
  return {
    type: types.DELETE_TODO,
    data
  };
};
