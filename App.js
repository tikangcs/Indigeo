import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, Button} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import MapView from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import MapScreen from './app/screens/MapScreen.js'

export default function App() {
  console.log(useDimensions())
  console.log(useDeviceOrientation())

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <MapScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
