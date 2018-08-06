import { createStackNavigator } from "react-navigation";
import HomeScreen from "@screens/home/containers";
import AddScreen from "@screens/add/containers";
import EditScreen from "@screens/edit/containers";

export const Navigations = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Add: {
      screen: AddScreen
    },
    Edit: {
      screen: EditScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);
