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
  Image,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { Overlay, Button, Input } from "react-native-elements";
import CommentSection from "../components/singleChalet/CommentSection";

const user1 = {
  username: "ahmad__s",
  firstName: "Ahmad",
  lastName: "Bahattab",
  profileImage: require("../photos/user1.jpg"),
};
const SingleChaletScreen = ({ route }) => {
  const [singlePost, setsinglePost] = useState({ ...route.params });
  const [visible, setVisible] = useState(false);
  const [reserveVisible, setreserveVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [suggustPrice, setsuggustPrice] = useState(null);

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

  const addComment = (newComment) => {
    let commentsArray = [...commentsArr];
    commentsArray.push(newComment);

    setcommentsArr(commentsArray);
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
        <ReserveForm
          toggleReserveOverlay={toggleReserveOverlay}
          suggustPrice={suggustPrice}
          setsuggustPrice={setsuggustPrice}
          date={date}
          setDate={setDate}
        />
      </Overlay>
      <CommentSection commentsArr={commentsArr} addComment={addComment} />
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
});

export default SingleChaletScreen;
