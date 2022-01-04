import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Screen from "./app/components/Reusable/Screen.js";
import HomeScreen from "./app/screens/HomeScreen";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    // <Screen>

    // </Screen>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
