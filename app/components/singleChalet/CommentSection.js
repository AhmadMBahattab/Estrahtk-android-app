import React, { useState } from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Overlay, Button, Input } from "react-native-elements";

const user1 = {
  id: 1,
  username: "ahmad__s",
  firstName: "Ahmad",
  lastName: "Bahattab",
  profileImage: require("../../photos/user1.jpg"),
};

const CommentSection = ({ commentsArr, addComment }) => {
  const [commentValue, setcommentValue] = useState("");
  return (
    <View style={styles.commentsContainer}>
      <View style={styles.commentInput}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Comments section</Text>
        <Input
          placeholder="Comment..."
          leftIcon={{
            type: "font-awesome",
            name: "comment",
            color: "gray",
            size: 15,
          }}
          rightIcon={
            commentValue.length > 0 ? (
              <TouchableOpacity
                onPress={() => [addComment(commentValue), setcommentValue("")]}
              >
                <Octicons name="triangle-right" color={"darkgray"} size={25} />
              </TouchableOpacity>
            ) : null
          }
          style={{ color: "gray", backgroundColor: "white" }}
          onChangeText={(text) => setcommentValue(text)}
          value={commentValue}
        />
      </View>

      <View>
        {commentsArr.map((item) => (
          <View style={styles.singleComment} key={item.id}>
            <View style={styles.profileContainer}>
              <View style={styles.profileImage}>
                <Image
                  source={user1.profileImage}
                  style={{ width: 60, height: 60, borderRadius: 30 }}
                />
              </View>
              <View style={styles.profileInfo}>
                <Text style={{ fontSize: 14, marginBottom: 3 }}>
                  {user1.firstName} {user1.lastName}
                </Text>
                <Text style={{ fontSize: 12 }}>@{user1.username}</Text>
              </View>
            </View>

            <View style={styles.commentInfo}>
              <Text key={item}>{item}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  commentsContainer: {
    padding: 5,
    marginTop: 30,
    marginBottom: 100,
    backgroundColor: "#E1E3E2",
  },
  commentInput: {
    padding: 5,
    backgroundColor: "white",
  },

  singleComment: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "white",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#D2D2D2",
  },
  profileContainer: {
    flexDirection: "row",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#D2D2D2",
  },
  profileImage: {
    marginBottom: 2,
  },
  profileInfo: {
    marginLeft: 10,
  },
  commentInfo: {
    padding: 10,
  },
});

export default CommentSection;
