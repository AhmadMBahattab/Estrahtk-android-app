import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import DatePicker from "react-native-datepicker";

const ReserveForm = ({
  toggleReserveOverlay,
  suggustPrice,
  setsuggustPrice,
  date,
  setDate,
}) => {
  return (
    <>
      <TouchableOpacity
        style={{ marginLeft: "80%", marginRight: 5 }}
        onPress={toggleReserveOverlay}
      >
        <Text style={{ fontWeight: "bold", color: "gray" }}>X</Text>
      </TouchableOpacity>
      <View style={styles.reserveContainer}>
        <DatePicker
          style={{ width: "100%", marginBottom: 10 }}
          placeholder="date"
          date={date}
          mode="date"
          onDateChange={(date) => setDate(date)}
          minDate={date}
          showIcon={false}
        />
        <TextInput
          placeholder="Price"
          onChangeText={(value) => setsuggustPrice(value)}
          textAlign="center"
          style={{
            marginTop: 5,
            padding: 4,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#a5a5a5",
          }}
          keyboardType="numeric"
        ></TextInput>

        <View style={styles.reserveButtonsContainer}>
          <View>
            <Button
              title="Send request"
              buttonStyle={{
                backgroundColor: "#01579B",
                borderRadius: 3,
              }}
              containerStyle={{
                width: 140,
                borderRadius: 50,
              }}
              icon={{
                name: "send",
                type: "font-awesome",
                size: 15,
                color: "white",
              }}
            />
          </View>
          <View>
            <Button
              title="Pay"
              icon={{
                name: "payment",
                type: "MaterialIcons",
                size: 15,
                color: "white",
              }}
              buttonStyle={{
                backgroundColor: "#388E3C",
                borderRadius: 3,
              }}
              containerStyle={{
                width: 140,
                borderRadius: 50,
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  reserveContainer: {
    marginVertical: 20,
  },
  reserveButtonsContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ReserveForm;
