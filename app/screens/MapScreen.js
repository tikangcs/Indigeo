import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Animated,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import MapView from "react-native-maps";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 5.5;
const CARD_WIDTH = CARD_HEIGHT - 10;

export default function MapScreen({
  setCurrentView,
  setCurrentItem,
  location,
  markers,
  signedIn,
}) {
  const [display, setDisplay] = useState("Flora");

  return (
    <SafeAreaView style={styles.container}>
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
        <View style={styles.headerButtons}>
          <TouchableWithoutFeedback onPress={() => setCurrentView("Home")}>
            <Image source={require("../assets/back.png")} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() =>
              signedIn ? setCurrentView("Profile") : setCurrentView("Login")
            }
          >
            <Image source={require("../assets/profile.png")} />
          </TouchableWithoutFeedback>
        </View>
        {markers.map((marker, index) => {
          return (
            <MapView.Marker key={index} coordinate={marker.coordinates}>
              <View style={styles.marker} />
            </MapView.Marker>
          );
        })}
      </MapView>
      <View style={styles.results}>
        <View style={styles.viewButtonsContainer}>
          <View style={styles.viewButtons}>
            <TouchableWithoutFeedback onPress={() => setDisplay("Flora")}>
              <Text style={styles.buttonText}>FLORA</Text>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.capturePhotoContainer}>
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
        <View style={styles.titleContainer}>
          <Text style={styles.title}>FOUND IN YOUR AREA</Text>
        </View>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          contentContainerStyle={styles.scrollView}
        >
          {markers.map((marker, index) => {
            return (
              <View style={styles.card} key={marker.id}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    setCurrentItem(index);
                    setCurrentView("Item");
                  }}
                >
                  <Image
                    source={require("../assets/Daisies.jpg")}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(176,196,222,0.4)",
  },
  map: {
    flex: 8,
  },
  headerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "4%",
    marginTop: "2%",
  },
  results: {
    flex: 4,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    backgroundColor: "rgba(139,69,19,0.5)",
  },
  viewButtonsContainer: {
    flex: 2,
    marginTop: "3%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  viewButtons: {
    flex: 2,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "2%",
    height: "100%",
    backgroundColor: "rgba(234,102,113, 0.7)",
  },
  buttonText: {
    fontSize: 30,
  },
  capturePhotoContainer: {
    justifyContent: "center",
  },
  capturePhoto: {
    flex: 1.45,
    resizeMode: "contain",
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: "rgba(128,128,128,0.7)",
  },
  titleContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    paddingLeft: "3%",
    color: "honeydew",
    textShadowColor: "black",
    textShadowRadius: 2,
    textShadowOffset: { width: 2, height: 2 },
  },
  scrollView: {
    alignItems: "center",
  },
  card: {
    padding: "1%",
    backgroundColor: "#FFF",
    marginHorizontal: 5,
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
    borderWidth: 1,
    backgroundColor: "peachpuff",
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
