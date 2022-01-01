import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SingleChaletScreen from "../screens/SingleChaletScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Single chalet" component={SingleChaletScreen} />
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default HomeNavigator;
