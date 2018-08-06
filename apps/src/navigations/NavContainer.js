import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { Navigations } from "./index";
import { connect } from "react-redux";

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const App = reduxifyNavigator(Navigations, "root");

const mapStateToProps = state => ({
  state: state.nav
});

const AppWithStateNavigation = connect(mapStateToProps)(App);

export default AppWithStateNavigation;
