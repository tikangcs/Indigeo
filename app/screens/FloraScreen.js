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
  require('../assets/Sunflower.jpg'),
  require('../assets/Chrysanthemum.jpg'),
  require('../assets/Daisies.jpg'),
  require('../assets/Hydrangea.jpg'),
  require('../assets/Lavender.jpg'),
];

const region = {
  latitude: 40.862611934273396,
  longitude: -73.55573613742635,
  latitudeDelta: 0.01864195044303443,
  longitudeDelta: 0.010142817690068,
}

const markers = [
  {
    coordinate: {
      latitude: 40.86269909829106,
      longitude: -73.5546788369571,
    },
    title: "Sunflower",
    description: "Helianthus",
    image: Images[0],
  },
  {
    coordinate: {
      latitude: 40.86165217089088,
      longitude: -73.55545459126333,
    },
    title: "Chrysanthemum",
    description: "Chrysanthemum morifolium",
    image: Images[1],
  },
  {
    coordinate: {
      latitude: 40.86083561459188,
      longitude: -73.5557885302147,
    },
    title: "Daisies",
    description: "Bellis perennis",
    image: Images[2],
  },
  {
    coordinate: {
      latitude: 40.86188395758858,
      longitude: -73.55690319073219,
    },
    title: "Hydrangea",
    description: "Hydrangea macrophylla",
    image: Images[3],
  },
  {
    coordinate: {
      latitude: 40.860803307846666,
      longitude: -73.55428374719885,
    },
    title: "Lavender",
    description: "Lavandula",
    image: Images[4],
  },
]

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default function FloraScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
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
      <Text style={styles.title}>Flora Nearby</Text>
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
    </SafeAreaView>
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
    backgroundColor: "red",
  },
  title: {
    position: 'absolute',
    bottom: 275,
    left: 10,
    fontSize: 33,
    backgroundColor: 'white',
    borderWidth: 1
  }
});