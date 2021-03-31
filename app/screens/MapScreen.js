import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { Image, View, Text, Button, Dimensions, StyleSheet, SafeAreaView, Alert, FlatList, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Sunflowers',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Chrysanthemum',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Lavender',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Daisies',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Hydrangeas',
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

export default function MapScreen(props) {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';

    return <Item item={item} onPress={() => setSelectedId(item.id)} style={{ backgroundColor }}> <Image source={require("../assets/Sunflower.jpg")} /> </Item>
  };

  return (
    <SafeAreaView style={styles.container}>
    <View>
      <MapView style={styles.map}
       showsUserLocation={true}
       region={{
       latitude: 40.86310278,
       longitude: -73.55590582,
       latitudeDelta: 0.0022,
       longitudeDelta: 0.0021}} />
      <Text style={styles.listTitle}>List of Flora in your Area</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  map: {
    width: Dimensions.get('window').width,
    height: '40%',
  },
  listTitle:{
    fontSize: 32
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})
