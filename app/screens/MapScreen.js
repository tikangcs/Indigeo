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
import MapStyles from "../styles/MapStyles";
import checkBoundaries from "../utils/boundaries";
import { db, storage } from "../utils/firebase";

const styles = StyleSheet.create(MapStyles);
const { height } = Dimensions.get("window");
const CARD_HEIGHT = height / 5.5;
const CARD_WIDTH = CARD_HEIGHT - 10;

export default function MapScreen({
  setCurrentView,
  setCurrentItem,
  setLocation,
  location,
  signedIn,
}) {
  const [display, setDisplay] = useState("Flora");
  const [markers, setMarkers] = useState([]);
  // const [imageUrl, setImageUrl] = useState(undefined);

  // let imageRef = storage.ref().child(display + "/" + "Daisies.jpg");
  // imageRef
  //   .getDownloadURL()
  //   .then((url) => {
  //     setImageUrl(url);
  //   })
  //   .catch((err) => console.log("Firebase Storage retrieval error:", err));

  db.collection("markers")
    .where("type", "==", display)
    .onSnapshot((query) => {
      const objs = [];
      query.forEach((doc) => {
        let docLat = doc.data().coordinates.latitude;
        let docLon = doc.data().coordinates.longitude;
        let test = {
          coords: {
            latitude: 40.78761,
            longitude: -73.811391,
          },
        };
        if (checkBoundaries(docLat, docLon, test)) {
          objs.push({ id: doc.id, ...doc.data() });
        }
      });
      setMarkers(objs);
    });

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        showsUserLocation={true}
        followsUserLocation={true}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        // onRegionChangeComplete={(region) => setLocation({ coords: region })}
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
        <View style={styles.titleContainer}>
          <Text style={styles.title}>FOUND IN YOUR AREA</Text>
        </View>
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
        <View style={styles.scrollViewContainer}>
          <Animated.ScrollView
            horizontal
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH}
            contentContainerStyle={styles.scrollView}
          >
            {markers ? (
              markers.map((marker, index) => {
                return (
                  <View style={styles.card} key={marker.id}>
                    <TouchableWithoutFeedback
                      onPress={() => {
                        setCurrentItem(index);
                        setCurrentView("Item");
                      }}
                    >
                      <Image
                        source={require("../assets/CanadaGoose.jpg")}
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
              })
            ) : (
              <View style={styles.card}>
                <Text>SEARCHING</Text>
              </View>
            )}
          </Animated.ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
