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
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
import { Input } from "react-native-elements";
import HomePost from "../components/Home/HomePost";
import DropDownPicker from "react-native-dropdown-picker";

const allPosts = [
  {
    id: 1,
    chaletName: "Al Morjan",
    image: require("../photos/chalets1.png"),
    price: 700,
    rate: 4.5,
    city: "Ryiadh",
    description: "Nice chalet",
  },
  {
    id: 2,
    chaletName: "Jm3yeh",
    image: require("../photos/chalets2.jpg"),
    price: 500,
    rate: 3.5,
    city: "Ryiadh",
    description: "Nice chalet",
  },
  {
    id: 3,
    chaletName: "Kharj",
    image: require("../photos/chalets3.jpg"),
    price: 450,
    rate: 4.0,
    city: "Ryiadh",
    description: "Nice chalet",
  },
];

const HomeScreen = ({ navigation }) => {
  const [postsArray, setpostsArray] = useState([...allPosts]);
  const [searchQuery, setsearchQuery] = useState(" ");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "High price", value: "High price" },
    { label: "Low price", value: "Low price" },
    { label: "High rate", value: "High rate" },
    { label: "Low rate", value: "Low rate" },
    { label: "A-Z", value: "A-Z" },
  ]);
  const sortPostsBy = (option) => {
    let allPosts = [...postsArray];

    console.log(option);

    if (option == "Low price") {
      allPosts = allPosts.sort((a, b) => Number(a.price) - Number(b.price));
      setpostsArray(allPosts);
      console.log("Low price");
    } else if (option == "High price") {
      allPosts = allPosts.sort((a, b) => Number(b.price) - Number(a.price));
      setpostsArray(allPosts);
      console.log("High price");
    } else if (option == "High rate") {
      allPosts = allPosts.sort((a, b) => Number(b.rate) - Number(a.rate));
      setpostsArray(allPosts);
      console.log("High rate");
    } else if (option == "Low rate") {
      allPosts = allPosts.sort((a, b) => Number(a.rate) - Number(b.rate));
      setpostsArray(allPosts);
      console.log("Low rate");
    } else if (option == "A-Z") {
      let first;
      let second;
      allPosts = allPosts.sort((a, b) => {
        first = a.chaletName.toLowerCase();
        second = b.chaletName.toLowerCase();
        if (first < second) {
          return -1;
        }
        if (first > second) {
          return 1;
        }
        return 0;
      });
      setpostsArray(allPosts);
    }
  };

  const handelSearch = (query) => {
    setsearchQuery(query);
    console.log(query);
  };

  let filterdPosts = postsArray.filter((post) =>
    post.chaletName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log(searchQuery);
  return (
    <>
      <View style={styles.searchQuery}>
        <Input
          placeholder="Search..."
          leftIcon={<AntDesign name="search1" size={20} color="gray" />}
          onChangeText={(text) => setsearchQuery(text)}
          style={{ color: "gray" }}
        />
      </View>
      <View style={styles.sortBy}>
        <DropDownPicker
          open={open}
          setOpen={setOpen}
          value={value}
          items={items}
          setValue={setValue}
          setItems={setItems}
          placeholder="Sort by"
          onChangeValue={(option) => sortPostsBy(option)}
        />
      </View>

      <ScrollView style={styles.container}>
        {filterdPosts.length == 0 && <Text>No match chalet</Text>}
        {filterdPosts.map((item) => (
          <View key={item.id}>
            <HomePost navigation={navigation} item={item} />
          </View>
        ))}
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    flex: 1,
    backgroundColor: "#fff",
    borderTopColor: "#D1D1D1",
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  searchQuery: {
    marginTop: 20,
  },
  sortBy: {
    marginTop: 20,
    marginLeft: 10,
    width: "40%",
  },
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

export default HomeScreen;
