import * as types from "@src/constants/actionTypes";
import { API } from "@src/services/APIServices";

export const initTodo = data => {
  return dispatch => {
    API()
      .get("todos")
      .then(res => {
        dispatch({ type: types.INIT_TODO, data: res.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
