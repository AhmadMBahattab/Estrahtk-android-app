import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/LoginScreen";
import SignUp from "../screens/SignUpScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
