import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import Login from "./src/components/auth/login";

const AuthStack = createSwitchNavigator({
  Login
});

// const TabNavigator = createBottomTabNavigator({
//   Home: AppStack,
//   Next: AppStack
// });

export default createAppContainer(AuthStack);
