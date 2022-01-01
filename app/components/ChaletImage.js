import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ChaletImage = ({ imageSrc }) => {
    let ImageSource=require("../photos")
  return (
    <View style={styles.container}>
      <Image source={imageSrc} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ChaletImage;
