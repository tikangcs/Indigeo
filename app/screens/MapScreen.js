import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import MapView from "react-native-maps";
import MapStyles from "../styles/MapStyles";
import checkBoundaries from "../utils/boundaries";
import { db } from "../utils/firebase";
import images from "../utils/images";

const styles = StyleSheet.create(MapStyles);
const { height } = Dimensions.get("window");
const CARD_HEIGHT = height / 5.5;
const CARD_WIDTH = CARD_HEIGHT - 10;

export default function MapScreen({
  setCurrentView,
  setCurrentItem,
  location,
  signedIn,
}) {
  const [display, setDisplay] = useState("Flora");
  const [markers, setMarkers] = useState([]);
  location = location || {
    coords: {
      latitude: 40.79156443798839,
      longitude: -73.81136196381692,
    },
  };

  useEffect(() => {
    db.collection("markers")
      .where("type", "==", display)
      .get()
      .then((query) => {
        const objs = [];
        query.forEach((doc) => {
          let docLat = doc.data().coordinates.latitude;
          let docLon = doc.data().coordinates.longitude;
          if (checkBoundaries(docLat, docLon, location)) {
            objs.push({ id: doc.id, ...doc.data() });
          }
        });
        setMarkers(objs);
      })
      .catch((err) => console.log("Error getting Firestore documents:", err));
  }, [display]);

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
        style={styles.map}
        provider={"google"}
        mapType={"mutedStandard"}
        showsMyLocationButton={true}
      >
        <View style={styles.headerButtons}>
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
              <View
                style={[
                  styles.ring,
                  display === "Fauna" ? styles.faunaRing : styles.floraRing,
                ]}
              >
                <Text style={styles.marker}>{index + 1}</Text>
              </View>
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
          <View style={styles.uploadContainer}>
            <TouchableWithoutFeedback
              onPress={() => console.log("coming soon")}
            >
              <Image
                style={styles.upload}
                source={require("../assets/add.png")}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.viewButtons}>
            <TouchableWithoutFeedback onPress={() => setDisplay("Fauna")}>
              <Text style={styles.buttonText}>FAUNA</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={styles.scrollViewContainer}>
          <ScrollView
            horizontal
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH}
            contentContainerStyle={styles.scrollView}
          >
            {markers.length ? (
              markers.map((marker, index) => {
                let test = marker.title;
                let image = images[test].uri;
                return (
                  <View style={styles.card} key={marker.id}>
                    <TouchableWithoutFeedback
                      onPress={() => {
                        setCurrentItem(marker);
                        setCurrentView("Item");
                      }}
                    >
                      <Image
                        source={image}
                        style={styles.cardImage}
                        resizeMode="cover"
                      />
                    </TouchableWithoutFeedback>
                    <View style={styles.textContent}>
                      <Text numberOfLines={1} style={styles.cardtitle}>
                        {index + 1}. {marker.title}
                      </Text>
                      <Text numberOfLines={1} style={styles.cardDescription}>
                        {marker.description}
                      </Text>
                    </View>
                  </View>
                );
              })
            ) : (
              <View style={styles.searching}>
                <Text style={styles.searchingText}>Searching...</Text>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
