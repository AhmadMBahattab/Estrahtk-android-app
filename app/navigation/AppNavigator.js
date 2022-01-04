import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { View, Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import MyChaletScreen from "../screens/myChaletScreen/MyChaletScreen";
import AccountScreens from "../screens/AccountScreen";
import MapScreen from "../screens/MapScreen";
import Screen from "../components/Reusable/Screen";

import HomeNavigator from "./HomeNavigator";
import MyChaletNavigator from "./MyChaletNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Screen>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home page"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="map-marker-alt" color={color} size={size} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="My chalets"
          component={MyChaletNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="plus-circle"
                color={color}
                size={size}
              />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Account"
          component={AccountScreens}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </Screen>
  );
};

export default AppNavigator;
