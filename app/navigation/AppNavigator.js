import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { View, Text } from "react-native";
import AccountScreens from "../screens/AccountScreen";
import SignUpScreen from "../screens/SignUpScreen";
import MapScreen from "../screens/MapScreen";
import Screen from "../components/Reusable/Screen";

import HomeNavigator from "./HomeNavigator";
import MyChaletNavigator from "./MyChaletNavigator";
const allPosts = [
  {
    id: 1,
    chaletName: "Al Morjan",
    image: require("../photos/chalets1.png"),
    price: 700,
    rate: 4.5,
    city: "Ryiadh",
    description: "Nice chalet",
    chaletLocation: { latitude: 24.77765, longitude: 45.544 },
  },
  {
    id: 2,
    chaletName: "Jm3yeh",
    image: require("../photos/chalets2.jpg"),
    price: 500,
    rate: 3.5,
    city: "Ryiadh",
    description: "Nice chalet",
    chaletLocation: { latitude: 24.77765, longitude: 46.544 },
  },

  {
    id: 3,
    chaletName: "Kharj",
    image: require("../photos/chalets3.jpg"),
    price: 450,
    rate: 4.0,
    city: "Ryiadh",
    description: "Nice chalet",
    chaletLocation: { latitude: 25.77765, longitude: 40.544 },
  },
];

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const [postsArray, setpostsArray] = useState([...allPosts]);
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
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="map-marker-alt" color={color} size={size} />
            ),
          }}
        >
          {() => <MapScreen posts={postsArray} title="Test map " />}
        </Tab.Screen>
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
          name="Sign up"
          component={SignUpScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="sign-in" color={color} size={size} />
            ),
          }}
        ></Tab.Screen>
        {/* <Tab.Screen
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
        ></Tab.Screen> */}
      </Tab.Navigator>
    </Screen>
  );
};

export default AppNavigator;
