import * as types from "@src/constants/actionTypes";

const initialState = {
  todos: [],
  single: {}
};

const reducers = (state = [], action) => {
  switch (action.type) {
    case types.INIT_TODO: {
      return Object.assign({}, state, {
        todos: action.data
      });
    }

    case types.ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.data.data]
      };
    }

    case types.READ_TODO: {
      return {
        ...state,
        single: action.data
      };
    }

    case types.EDIT_TODO: {
    }

    case types.DELETE_TODO: {
      let data = state.todos.filter(v => v.id !== action.data);

      return {
        ...state,
        todos: data
      };
    }

    default: {
      return state;
    }
  }
};

export default reducers;
