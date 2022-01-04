import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";

const AllPosts = ({ item }) => {
  return (
    <View style={styles.singlePostContainer} key={item.id}>
      <View style={styles.image}>
        <Image
          source={item.image}
          style={{ width: "100%", height: 200, borderRadius: 20 }}
        />
      </View>
      <View style={styles.infoLayout}>
        <View style={styles.chaletName}>
          <MaterialIcons name="title" size={20} />
          <Text style={{ paddingLeft: 10 }}>{item.chaletName}</Text>
        </View>
        <View style={styles.price}>
          <FontAwesome5 name="money-bill-wave" size={20} color="green" />
          <Text style={{ paddingLeft: 10 }}>{item.price}</Text>
        </View>
      </View>

      <View style={styles.infoLayout}>
        <View style={styles.rate}>
          <MaterialCommunityIcons name="star" size={20} color={"yellow"} />
          <Text style={{ paddingLeft: 10 }}>{item.rate}</Text>
        </View>
        <View style={styles.city}>
          <MaterialCommunityIcons name="city" size={20} />
          <Text style={{ paddingLeft: 10 }}>{item.city}</Text>
        </View>
      </View>

      <View style={styles.descripation}>
        <MaterialIcons name="description" size={20} />
        <Text style={{ paddingLeft: 10 }}>{item.description}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  singlePostContainer: {
    backgroundColor: "#D4D4D4",
    marginBottom: 20,
  },
  image: {
    width: "100%",
  },
  infoLayout: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chaletName: {
    margin: 10,
    flexDirection: "row",
  },
  price: {
    margin: 10,
    flexDirection: "row",
  },
  rate: {
    margin: 10,
    flexDirection: "row",
  },
  city: {
    margin: 10,
    flexDirection: "row",
  },
  descripation: {
    margin: 10,
    marginBottom: 15,
    flexDirection: "row",
  },
});

export default AllPosts;
