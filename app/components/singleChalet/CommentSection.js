import React, { useState } from "react";
import {
  MaterialCommunityIcons,
  FontAwesome,
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

  const handeleCommentChange = (text) => {
    if (commentValue.length >= 120) {
      return;
    }
    setcommentValue(text);
  };
  return (
    <View style={styles.commentsContainer}>
      <View style={styles.commentInputContainer}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Comments section</Text>
        <View style={styles.commentInput}>
          <Input
            placeholder="Comment..."
            leftIcon={{
              type: "font-awesome",
              name: "comment",
              color: "gray",
              size: 15,
            }}
            rightIcon={
              <Text style={{ color: "gray" }}> {commentValue.length} /120</Text>
            }
            style={{ color: "black", backgroundColor: "white" }}
            onChangeText={(text) => handeleCommentChange(text)}
            value={commentValue}
          />
          <View style={{ width: "30%" }}>
            <TouchableOpacity disabled={commentValue.length > 0 ? false : true}>
              <Button
                title={
                  <FontAwesome name="chevron-right" size={24} color="white" />
                }
                onPress={() => [addComment(commentValue), setcommentValue("")]}
                style={{ marginBottom: 10 }}
                buttonStyle={{
                  backgroundColor: "rgba(90, 154, 230, 1)",
                  borderColor: "transparent",
                  borderWidth: 0,
                  borderRadius: 30,
                }}
                containerStyle={{
                  width: 80,
                }}
                disabled={commentValue.length > 0 ? false : true}
              />
            </TouchableOpacity>
          </View>
        </View>
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
  commentInputContainer: {
    padding: 5,
    backgroundColor: "white",
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
