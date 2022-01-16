import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native-elements";
import * as Location from "expo-location";

import MapView, { Marker, Callout, CalloutSubview } from "react-native-maps";
let cordenates = [
  { latitude: 37.77765, longitude: 40.544 },
  { latitude: 38.77765, longitude: 40.544 },
  { latitude: 39.77765, longitude: 40.544 },
];

const MapScreen = ({ posts, title }) => {
  const [pin, setpin] = useState(require("../photos/map-pin-2.png"));
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationEnabeled, setlocationEnabeled] = useState(false);
  const [selectedPost, setselectedPost] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      setlocationEnabeled(true);
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  });
  return (
    <>
      {selectedPost && (
        <View
          style={[
            styles.container,
            {
              backgroundColor: "blue",
              width: 100,
              height: 100,
              position: "absolute",
            },
          ]}
        ></View>
      )}
      {locationEnabeled ? (
        <View style={styles.container}>
          <MapView
            onPress={(e) => {
              e.preventDefault();
              setselectedPost(null);
            }}
            style={styles.map}
            showsUserLocation={true}
            initialRegion={{
              latitude: 23.8859,
              longitude: 45.0792,
              latitudeDelta: 5.9222,
              longitudeDelta: 5.6421,
            }}
          >
            {posts.map((item, index) => (
              <View>
                <Marker
                  key={index}
                  coordinate={{
                    latitude: item.chaletLocation.latitude,
                    longitude: item.chaletLocation.longitude,
                  }}
                >
                  <Callout
                    style={styles.post}
                    onPress={() => {
                      console.log("test");
                    }}
                  >
                    <Image source={pin} width={100} height={100} />
                    <Text>{item.chaletName}</Text>
                    <Text>{item.price}</Text>
                  </Callout>
                </Marker>
              </View>
            ))}
          </MapView>
        </View>
      ) : (
        <View style={styles.container}>
          <Text>You must enable location permession</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  post: {
    padding: 10,
  },
});
export default MapScreen;
