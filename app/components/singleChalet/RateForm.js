import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, Rating } from "react-native-elements";

const RateForm = ({ toggleRateOverlay, ratingCompleted }) => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <TouchableOpacity
        style={{ marginLeft: "70%", marginRight: 10 }}
        onPress={toggleRateOverlay}
      >
        <Text style={{ fontWeight: "bold", color: "gray" }}>X</Text>
      </TouchableOpacity>

      <View style={styles.postRateContainer}>
        <Rating
          showRating
          imageSize={40}
          onFinishRating={ratingCompleted}
          style={{ paddingVertical: 10 }}
        />
      </View>

      <Button
        title="Submit"
        onPress={toggleRateOverlay}
        buttonStyle={{
          backgroundColor: "rgba(90, 154, 230, 1)",
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          width: 100,
          alignSelf: "center",
          borderRadius: 50,
        }}
      />
    </>
  );
};
const styles = StyleSheet.create({
  postRateContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
});

export default RateForm;
