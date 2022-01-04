import React, { useState } from "react";
import { Button, Input } from "react-native-elements";
import DropDownPicker from "react-native-dropdown-picker";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";

const CreatePost = ({ addPost, toggleAddPostOverlay }) => {
  const [chaletName, setchaletName] = useState("");
  const [price, setprice] = useState("");
  const [city, setcity] = useState("");
  const [neighborhood, setneighborhood] = useState("");
  const [description, setdescription] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "High price", value: "High price" },
    { label: "Low price", value: "Low price" },
    { label: "High rate", value: "High rate" },
    { label: "Low rate", value: "Low rate" },
    { label: "A-Z", value: "A-Z" },
  ]);

  const stringLength = (string) => {
    let textNum = 0;
    let arrOfString = string.split("");
    for (let i = 0; i < string.length; i++) {
      if (arrOfString[i] != " ") {
        textNum++;
      }
    }
    return textNum;
  };

  let newPost = {
    chaletName,
    price,
    rate: 0,
    city,
    neighborhood,
    description,
  };

  return (
    <>
      <TouchableOpacity
        style={{ marginLeft: "80%", marginRight: 5, marginBottom: 5 }}
        onPress={toggleAddPostOverlay}
      >
        <Text style={{ fontWeight: "bold", color: "gray" }}>X</Text>
      </TouchableOpacity>
      <ScrollView style={styles.addPostContainer}>
        <Input
          label="Chalet name"
          onChangeText={(text) => setchaletName(text)}
          rightIcon={
            stringLength(chaletName) < 5 ? (
              <Text style={{ color: "red" }}>{stringLength(chaletName)}</Text>
            ) : (
              <Text style={{ color: "green" }}>{stringLength(chaletName)}</Text>
            )
          }
        />
        <Input
          label="Price"
          keyboardType="numeric"
          onChangeText={(text) => setprice(text)}
          rightIcon={
            price < 100 ? (
              <EvilIcons name="check" size={24} color="red" />
            ) : (
              <EvilIcons name="check" size={24} color="green" />
            )
          }
        />
        <Input label="City" onChangeText={(text) => setcity(text)} />
        <Input
          label="Neighborhood"
          onChangeText={(text) => setneighborhood(text)}
        />
        <View style={styles.dropdownContainer}>
          <DropDownPicker
            style={{ margin: 10, width: 120 }}
            open={open}
            setOpen={setOpen}
            value={value}
            items={items}
            setValue={setValue}
            setItems={setItems}
            placeholder="City"
            onChangeValue={(option) => sortPostsBy(option)}
          />

          <DropDownPicker
            style={{ margin: 15, width: 150 }}
            open={open}
            setOpen={setOpen}
            value={value}
            items={items}
            setValue={setValue}
            setItems={setItems}
            placeholder="Neighborhood"
            onChangeValue={(option) => sortPostsBy(option)}
          />
        </View>
        <Input
          label="Descreption"
          multiline={true}
          numberOfLines={3}
          onChangeText={(text) => setdescription(text)}
        />
      </ScrollView>
      <Button
        title={"Submit"}
        onPress={() => addPost(newPost)}
        disabled={
          price > 100 &&
          price < 10000 &&
          chaletName.length > 4 &&
          chaletName.length < 30 &&
          city != "" &&
          neighborhood != ""
            ? false
            : true
        }
        buttonStyle={{
          backgroundColor: "#004DCF",
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ fontWeight: "bold" }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 20,
    padding: 20,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
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
  dropdownContainer: {
    width: "40%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
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
  addButton: {
    justifyContent: "flex-end",
    marginBottom: 6,
    marginRight: 10,
  },
  addPostContainer: {},
});

export default CreatePost;
