import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AccountScreens = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.profileContainer}>
          <View>
            <Image
              style={styles.profileImage}
              source={require("../photos/user1.jpg")}
            />
          </View>
          <View style={styles.profileInfo}>
            <Text>Ahmad@gmail.com</Text>
            <Text>Ahmad mohammed</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.profileList}>
        <TouchableOpacity>
          <View style={styles.singleList}>
            <View
              style={{
                padding: 5,
                backgroundColor: "green",
                borderRadius: 25,
                marginRight: 10,
              }}
            >
              <MaterialCommunityIcons name="home" size={25} color="white" />
            </View>

            <Text>My posts</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.singleList}>
            <View
              style={{
                padding: 5,
                backgroundColor: "tomato",
                borderRadius: 25,
                marginRight: 10,
              }}
            >
              <MaterialCommunityIcons name="logout" size={25} color="white" />
            </View>

            <Text>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileContainer: {
    padding: 10,
    marginRight: 10,
    backgroundColor: "lightgray",
    flexDirection: "row",
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 20,
  },
  profileInfo: {
    marginLeft: 15,
    marginTop: 20,
  },
  profileList: {
    padding: 10,
    marginRight: 10,
    marginTop: 20,
  },
  singleList: {
    flexDirection: "row",
    marginTop: 20,
  },
});

export default AccountScreens;
