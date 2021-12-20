import { NavigationContainer } from "@react-navigation/native";
import Screen from "./app/components/Screen";
import HomeScreen from "./app/screens/HomeScreen";
import Login from "./app/screens/Login";
import SignUp from "./app/screens/SignUp";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <Screen>
      <SignUp />
    </Screen>
    // <NavigationContainer>
    //   <AppNavigator />
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
