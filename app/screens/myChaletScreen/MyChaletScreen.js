import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { Button, FAB, Input, Overlay } from "react-native-elements";
import CreatePost from "../../components/MyChalets/CreatePost";
import AllPosts from "../../components/MyChalets/AllPosts";

const allPosts = [
  {
    id: 1,
    chaletName: "Al Morjan",
    image: require("../../photos/chalets1.png"),
    imageUri: "null",
    price: 700,
    rate: 4.5,
    city: "Ryiadh",
    description: "Nice chalet",
  },
  {
    id: 2,
    chaletName: "Jm3yeh",
    image: require("../../photos/chalets2.jpg"),
    imageUri: "null",
    price: 500,
    rate: 3.5,
    city: "Ryiadh",
    description: "Nice chalet",
  },
  {
    id: 3,
    chaletName: "Kharj",
    image: require("../../photos/chalets3.jpg"),
    imageUri: "null",
    price: 450,
    rate: 4.0,
    city: "Ryiadh",
    description: "Nice chalet",
  },
];

console.log(allPosts[0].image);

const MyChaletScreen = () => {
  const [postsArray, setpostsArray] = useState([...allPosts]);
  const [visible, setVisible] = useState(true);
  const [addPostVisable, setaddPostVisable] = useState(false);

  const toggleAddPostOverlay = () => {
    setaddPostVisable(false);
  };
  const addPost = (newPost) => {
    let allPosts = [...postsArray];
    let post = { ...newPost };

    allPosts.push(post);
    setpostsArray(allPosts);
    setaddPostVisable(false);
  };

  const deletePost = (postId) => {
    let allPosts = [...postsArray];
    allPosts = allPosts.filter((post) => {
      return post.id != postId;
    });
    setpostsArray(allPosts);
  };
  return (
    <>
      <ScrollView style={styles.container}>
        {postsArray.map((item) => (
          <AllPosts item={item} deletePost={deletePost} />
        ))}
      </ScrollView>

      <View>
        <FAB
          style={styles.addButton}
          visible={visible}
          icon={{ name: "add", color: "white" }}
          color="#0D47A1"
          onPress={() => setaddPostVisable(true)}
        />
      </View>
      <Overlay isVisible={addPostVisable}>
        <CreatePost
          addPost={addPost}
          toggleAddPostOverlay={toggleAddPostOverlay}
        />
      </Overlay>
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

  addButton: {
    justifyContent: "flex-end",
    marginBottom: 6,
    marginRight: 10,
  },
});

export default MyChaletScreen;
