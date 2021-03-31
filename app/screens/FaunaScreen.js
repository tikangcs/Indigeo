import React, {useState} from 'react';
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
} from "react-native";
import MapView from "react-native-maps";

const Images = [
  require('../assets/Squirrel.jpg'),
  require('../assets/Rabbit.jpg'),
  require('../assets/Racoon.jpg'),
  require('../assets/CanadaGoose.jpg'),
  require('../assets/Osprey.jpg'),
];

const region = {
  latitude: 40.87969634781522,
  longitude: -73.56653112042775,
  latitudeDelta: 0.01864195044303443,
  longitudeDelta: 0.010142817690068,
}

const markers = [
  {
    coordinate: {
      latitude: 40.87982034843609,
      longitude: -73.56455045178397,
    },
    title: "Squirrel",
    description: "Sciuridae",
    image: Images[0],
  },
  {
    coordinate: {
      latitude: 40.878287761058644,
      longitude: -73.5668223419099,
    },
    title: "Rabbit",
    description: "Oryctolagus cuniculus",
    image: Images[1],
  },
  {
    coordinate: {
      latitude: 40.88062085731135,
      longitude: -73.56946349262996,
    },
    title: "Racoon",
    description: "Procyon lotor",
    image: Images[2],
  },
  {
    coordinate: {
      latitude: 40.881617598194744,
      longitude: -73.56618790661248,
    },
    title: "Canada Goose",
    description: "Branta canadensis",
    image: Images[3],
  },
  {
    coordinate: {
      latitude: 40.88222021016556,
      longitude: -73.56372931799889,
    },
    title: "Osprey",
    description: "Pandion haliaetus",
    image: Images[4],
  },
]

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default function FaunaScreen({setCurrentView}) {


  return (
    <View style={styles.container}>
      <MapView
        showsUserLocation={true}
        initialRegion={region}
        style={styles.container}
        provider={'google'}
      >
        {markers.map((marker, index) => {
            return (
            <MapView.Marker key={index} coordinate={marker.coordinate}>
              <View style={styles.marker} />
            </MapView.Marker>)
        })}
      </MapView>
      <Text style={styles.title}>Fauna Nearby</Text>
      <Animated.ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH}
        style={styles.scrollView}
        contentContainerStyle={styles.endPadding}
      >
        {markers.map((marker, index) => {
            return (<View style={styles.card} key={index}>
              <Image
                source={marker.image}
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
    borderWidth: 1
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
    width: 13,
    height: 13,
    borderRadius: 5,
    backgroundColor: "blue",
  },
  title: {
    position: 'absolute',
    bottom: 275,
    left: 10,
    fontSize: 30,
    backgroundColor: 'white',
    borderWidth: 1
  }
});