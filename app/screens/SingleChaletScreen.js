import React, { useState } from "react";
import SinglePost from "../components/singleChalet/singlePost";
import ReserveForm from "../components/singleChalet/ReserveForm";
import RateForm from "../components/singleChalet/RateForm";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { Overlay, Button, Input } from "react-native-elements";

const SingleChaletScreen = ({ route }) => {
  const [singlePost, setsinglePost] = useState({ ...route.params });
  const [visible, setVisible] = useState(false);
  const [reserveVisible, setreserveVisible] = useState(false);
  const [suggustPrice, setsuggustPrice] = useState(null);
  const [commentValue, setcommentValue] = useState("");
  const [commentsArr, setcommentsArr] = useState([]);

  const toggleRateOverlay = () => {
    setreserveVisible(false);
    setVisible(!visible);
  };
  const toggleReserveOverlay = () => {
    setVisible(false);
    setreserveVisible(!reserveVisible);
  };
  const ratingCompleted = (rating) => {
    console.log("comment value is: " + rating);
  };
  const handeleCommentChange = (comment) => {
    setcommentValue(comment);
    console.log("Rating is: " + commentValue);
  };

  const addComment = (newComment) => {
    let commentsArray = [...commentsArr];
    commentsArray.push(newComment);
    setcommentValue(" ");
    setcommentsArr(commentsArray);
    console.log(commentValue);
  };

  return (
    <ScrollView style={styles.container}>
      <SinglePost item={singlePost} />
      <View style={styles.postButtonsContainer}>
        <View style={{ marginLeft: "15%" }}>
          <Button
            title="Reserve"
            onPress={toggleReserveOverlay}
            buttonStyle={{
              backgroundColor: "#388E3C",
              borderRadius: 3,
            }}
            containerStyle={{
              width: 100,
              borderRadius: 50,
            }}
            icon={{
              name: "calendar",
              type: "font-awesome",
              size: 15,
              color: "white",
            }}
          />
        </View>
        <View style={{ marginRight: "15%" }}>
          <Button
            title="Rate"
            icon={{
              name: "star",
              type: "font-awesome",
              size: 15,
              color: "white",
            }}
            onPress={toggleRateOverlay}
            buttonStyle={{
              backgroundColor: "#E6AE07",
              borderRadius: 3,
            }}
            containerStyle={{
              width: 100,
              borderRadius: 50,
            }}
          />
        </View>
      </View>

      <Overlay isVisible={visible}>
        <RateForm
          toggleRateOverlay={toggleRateOverlay}
          ratingCompleted={ratingCompleted}
        />
      </Overlay>

      <Overlay isVisible={reserveVisible}>
        <ReserveForm toggleReserveOverlay={toggleReserveOverlay} />
      </Overlay>

      <View style={styles.commentsContainer}>
        <Text>Comments </Text>
        <Input
          placeholder="Comment"
          leftIcon={{
            type: "font-awesome",
            name: "comment",
            color: "gray",
            size: 15,
          }}
          rightIcon={
            commentValue.length > 0 ? (
              <TouchableOpacity onPress={() => addComment(commentValue)}>
                <Octicons name="triangle-right" color={"darkgray"} size={25} />
              </TouchableOpacity>
            ) : null
          }
          style={{ color: "gray" }}
          onChangeText={(value) => handeleCommentChange(value)}
        />
        <View>
          {commentsArr.map((item) => (
            <Text key={item}>{item}</Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  postButtonsContainer: {
    marginTop: 10,
    padding: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  commentsContainer: {
    marginTop: 30,
    marginBottom: 100,
  },
});

export default SingleChaletScreen;
