import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const HomePost = ({ navigation, item }) => {
  return (
    <>
      <TouchableOpacity
        key={item.id}
        onPress={() => navigation.navigate("Single chalet", item)}
      >
        <View style={styles.SinglePost}>
          <View style={styles.image}>
            <Image source={item.image} style={{ width: "100%", height: 150 }} />
          </View>
          <View style={styles.postInfo}>
            <View style={styles.singleInfo}>
              <MaterialIcons name="title" size={20} />
              <Text>{item.chaletName}</Text>
            </View>
            <View style={styles.singleInfo}>
              <MaterialCommunityIcons name="star" size={20} color={"yellow"} />
              <Text>{item.rate}</Text>
            </View>
            <View style={styles.singleInfo}>
              <FontAwesome5 name="money-bill-wave" size={20} color="green" />
              <Text> {item.price}</Text>
            </View>
            <View style={styles.singleInfo}>
              <MaterialCommunityIcons name="city" size={20} />
              <Text> {item.city}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  SinglePost: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    borderBottomColor: "#D1D1D1",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  image: {
    width: "60%",
  },
  postInfo: {},

  singleInfo: {
    margin: 10,
    fontSize: 18,
    flexDirection: "row",
    paddingLeft: 10,
  },
});

export default HomePost;
