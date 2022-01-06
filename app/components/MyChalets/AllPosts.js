import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
const AllPosts = ({ item, deletePost }) => {
  const rightAction = () => {
    return (
      <View style={styles.postButtons}>
        <TouchableOpacity onPress={() => deletePost(item.id)}>
          <MaterialCommunityIcons
            name="delete"
            color="red"
            size={30}
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            name="edit"
            color="#007493"
            size={30}
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <Swipeable renderRightActions={rightAction}>
      <View style={styles.singlePostContainer} key={item.id}>
        <View style={styles.image}>
          {item.imageUri.startsWith("file") ? (
            <Image
              source={{ uri: item.imageUri }}
              style={{ width: "100%", height: 200, borderRadius: 20 }}
            />
          ) : (
            <Image
              source={item.image}
              style={{ width: "100%", height: 200, borderRadius: 20 }}
            />
          )}
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
    </Swipeable>
  );
};
const styles = StyleSheet.create({
  singlePostContainer: {
    backgroundColor: "#D4D4D4",
    marginBottom: 20,
  },
  postButtons: {
    padding: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
