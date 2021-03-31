import React, {useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
} from "react-native";
import MapView from "react-native-maps";

const Images = [
  { uri: "../assets/Sunflower.jpg" },
  { uri: "../assets/Chrysanthemum.jpg" },
  { uri: "../assets/Lavender.jpg" },
  { uri: "../assets/Daisies.jpg" },
];

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default function MarkerScreen(props) {
  const [maps, setMaps] = useState('')
  const [animation, setAnimation] = useState('')
  const [region, setRegion] = useState({
      latitude: 45.52220671242907,
      longitude: -122.6653281029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    });
  const [markers, setMarkers] = useState([
    {
      coordinate: {
        latitude: 45.524548,
        longitude: -122.6749817,
      },
      title: "Sunflower",
      description: "FLORA",
      image: Images[0],
    },
    {
      coordinate: {
        latitude: 45.524698,
        longitude: -122.6655507,
      },
      title: "Chrysanthemum",
      description: "FLORA",
      image: Images[1],
    },
    {
      coordinate: {
        latitude: 45.5230786,
        longitude: -122.6701034,
      },
      title: "Lavender",
      description: "FLORA",
      image: Images[2],
    },
    {
      coordinate: {
        latitude: 45.521016,
        longitude: -122.6561917,
      },
      title: "Lavender",
      description: "FLORA",
      image: Images[3],
    },
  ])

  return (
    <View style={styles.container}>
      <MapView
        ref={(map) => (setMaps(map))}
        initialRegion={region}
        style={styles.container}
        provider={'google'}
      >
        {markers.map((marker, index) => {
            return (<MapView.Marker key={index} coordinate={marker.coordinate}>
              <View style={styles.marker} />
            </MapView.Marker>)
        })}
      </MapView>
      <Animated.ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: {setAnimation},
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        style={styles.scrollView}
        contentContainerStyle={styles.endPadding}
      >
        {markers.map((marker, index) => {
          console.log('1', marker.image.uri)
            return (<View style={styles.card} key={index}>
              <Image
                source={require("../assets/Sunflower.jpg")}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.description}
                </Text>
              </View>
            </View>)
        })}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  marker: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: "red",
  },
});