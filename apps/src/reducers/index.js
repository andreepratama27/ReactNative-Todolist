import { combineReducers } from "redux";
import { createNavigationReducer } from "react-navigation-redux-helpers";
import { Navigations } from "@src/navigations/";
import todos from "./todos";

const navReducer = createNavigationReducer(Navigations);

export default combineReducers({
  todos,
  nav: navReducer
});
