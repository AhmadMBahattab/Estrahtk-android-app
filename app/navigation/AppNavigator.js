import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { View, Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import MyChaletScreen from "../screens/MyChaletScreen";
import AccountScreens from "../screens/AccountScreen";
import Screen from "../components/Screen";
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Screen>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="My chalets"
          component={MyChaletScreen}
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
