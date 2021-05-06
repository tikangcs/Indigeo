import React, { useState, useEffect } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import MapView from "react-native-maps";
import markers from "../utils/markers";
import region from "../utils/region";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 5.5;
const CARD_WIDTH = CARD_HEIGHT - 10;

export default function MapScreen({ setCurrentView }) {
  const [display, setDisplay] = useState("Flora");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      setLocation(userLocation);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <MapView
        showsUserLocation={true}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={styles.map}
        provider={"google"}
        mapType={"mutedStandard"}
        showsMyLocationButton={true}
      >
        {markers.map((marker, index) => {
          return (
            <MapView.Marker key={index} coordinate={marker.coordinate}>
              <View style={styles.marker} />
            </MapView.Marker>
          );
        })}
      </MapView>
      {/* <View>
        <Text>{text}</Text>
      </View> */}
      <View style={styles.results}>
        <View style={styles.viewButtonsContainer}>
          <View style={styles.viewButtons}>
            <TouchableWithoutFeedback onPress={() => setDisplay("Flora")}>
              <Text style={styles.buttonText}>FLORA</Text>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.capturePhoto}>
            <Image
              style={styles.capturePhoto}
              source={require("../assets/camera.png")}
            />
          </View>
          <View style={styles.viewButtons}>
            <TouchableWithoutFeedback onPress={() => setDisplay("Fauna")}>
              <Text style={styles.buttonText}>FAUNA</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={() => setCurrentView("Home")}>
          <Text style={styles.title}>Flora Nearby</Text>
        </TouchableWithoutFeedback>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          style={styles.scrollView}
        >
          {markers.map((marker, index) => {
            return (
              <View style={styles.card} key={index}>
                <TouchableWithoutFeedback
                  onPress={() => setCurrentView("Item")}
                >
                  <Image
                    source={marker.image}
                    style={styles.cardImage}
                    resizeMode="cover"
                  />
                </TouchableWithoutFeedback>
                <View style={styles.textContent}>
                  <Text numberOfLines={1} style={styles.cardtitle}>
                    {marker.title}
                  </Text>
                  <Text numberOfLines={1} style={styles.cardDescription}>
                    {marker.description}
                  </Text>
                </View>
              </View>
            );
          })}
        </Animated.ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 8,
  },
  results: {
    flex: 4,
    backgroundColor: "rgba(128, 128, 128, 0.3)",
  },
  viewButtonsContainer: {
    flex: 2,
    marginTop: "2%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  viewButtons: {
    flex: 2,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: "2%",
    backgroundColor: "rgba(166, 204, 241, 0.7)",
  },
  buttonText: {
    fontSize: 30,
  },
  capturePhoto: {
    flex: 1.4,
    resizeMode: "contain",
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: "rgba(128,128,128,0.5)",
  },
  title: {
    flex: 1,
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: "2%",
    paddingLeft: "2%",
  },
  card: {
    padding: "1%",
    backgroundColor: "#FFF",
    marginHorizontal: 5,
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
    borderWidth: 1,
    backgroundColor: "rgba(213, 38, 85, 0.25)",
  },
  cardImage: {
    flex: 2.5,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 20,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 16,
    color: "#444",
  },
  marker: {
    width: 13,
    height: 13,
    borderRadius: 5,
    backgroundColor: "red",
  },
});
