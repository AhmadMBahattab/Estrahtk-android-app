import React from "react";
import { View, Text } from "react-native";
import MyChaletScreen from "../screens/myChaletScreen/MyChaletScreen";
import UpcomingReservationsScreen from "../screens/myChaletScreen/UpcomingReservationsScreen";

import { createDrawerNavigator } from "@react-navigation/drawer";
import UpcomingReservations from "../screens/myChaletScreen/UpcomingReservationsScreen";

const Drawer = createDrawerNavigator();

const MyChaletNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="My chalet" component={MyChaletScreen} />
      <Drawer.Screen
        name="My upcoming reservations"
        component={UpcomingReservations}
      />
    </Drawer.Navigator>
  );
};

export default MyChaletNavigator;
