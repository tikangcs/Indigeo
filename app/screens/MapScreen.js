import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { View, Text, Button, Dimensions, StyleSheet, SafeAreaView, Alert, FlatList, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Sunflowers',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Roses',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Orchids',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Daisies',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Hydragias',
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

    return <Item item={item} onPress={() => setSelectedId(item.id)} style={{ backgroundColor }} />;
  };

  return (
    <SafeAreaView>
    <View style={styles.filter}>
      <Button
        style={styles.filterButtons}
        title="Flora"
        onPress={()=> Alert.alert('Filtered for Flora')}
        accessibilityLabel='Filter for Flora'
        color="orange"
      />
      <Button
        style={styles.filterButtons}
        title="Fauna"
        onPress={()=> Alert.alert('Filtered for Fauna')}
        accessibilityLabel='Filter for Fauna'
        color="orange"
      />
    </View>
    <View>
      <MapView style={styles.map} />
      <Text style={styles.listtitle}>List of Flora in your Area</Text>
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
  map: {
    width: Dimensions.get('window').width,
    height: '40%',
  },
  filter: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  filterButtons: {
    backgroundColor: "green"
  },
  listtitle:{
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
