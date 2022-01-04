import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

console.log(StatusBar.currentHeight);
function Screen({ children }) {
  return <View style={styles.screen}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
});

export default Screen;
