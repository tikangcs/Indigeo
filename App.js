import React, {useState} from 'react';
import { StyleSheet, Image, Text, View, Dimensions, SafeAreaView, Button} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import MapView from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import ViewItemScreen from './app/screens/ViewItemScreen.js';
import FloraScreen from './app/screens/FloraScreen.js';
import FaunaScreen from './app/screens/FaunaScreen.js';

export default function App() {
  const [currentView, setCurrentView] = useState('Fauna');
  return (
    currentView === 'Flora' ? <FloraScreen /> : <FaunaScreen />
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
