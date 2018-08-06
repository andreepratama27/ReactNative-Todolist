import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducers from "@src/reducers/";

const middleware = [
  thunk,
  logger,
  createReactNavigationReduxMiddleware("root", state => state.nav)
];

export default () => {
  let store = createStore(
    rootReducers,
    composeWithDevTools(compose(applyMiddleware(...middleware)))
  );

  return {
    store
  };
};
