import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, Button} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import MapView from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import MapScreen from './app/screens/MapScreen.js'
import ViewItemScreen from './app/screens/ViewItemScreen.js'

export default function App() {
  // console.log(useDimensions())
  // console.log(useDeviceOrientation())

  return (
    <ViewItemScreen />
    // <SafeAreaView style={styles.container}>
    //   <StatusBar style="auto" />
    //   <MapScreen />
    //   <View style={styles.filter}>
    //     <Button
    //       style={styles.filterButtons}
    //       title="Flora"
    //       onPress={()=> Alert.alert('Filtered for Flora')}
    //       accessibilityLabel='Filter for Flora'
    //       color="orange"
    //     />
    //     <Button
    //       style={styles.filterButtons}
    //       title="Fauna"
    //       onPress={()=> Alert.alert('Filtered for Fauna')}
    //       accessibilityLabel='Filter for Fauna'
    //       color="orange"
    //     />
    // </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  filter: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "dodgerblue"
  },
  filterButtons: {
    backgroundColor: "green"
  },
});
