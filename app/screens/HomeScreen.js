import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, TouchableWithoutFeedback } from "react-native";

export default function HomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/Home5.jpg')}
    >
      <Image
        style={styles.logo}
        source={require('../assets/Logo2.png')} />
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback>
          <View style={styles.floraButton}>
            <Text style={styles.buttonText}>FLORA</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.faunaButton}>
            <Text style={styles.buttonText}>FAUNA</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    flexDirection:'row'
  },
  floraButton: {
    width: '50%',
    height: 70,
    backgroundColor: 'rgba(166, 204, 241, 0.7)',
    flexDirection: 'row',
    borderWidth: 1,
  },
  faunaButton: {
    width: '50%',
    height: 70,
    backgroundColor: 'rgba(166, 204, 241, 0.7)',
    flexDirection: 'row',
    borderWidth: 1,
    color: 'rgba(3, 54, 1, 1)',
  },
  logo: {
    position: 'absolute',
    top: 40,
    alignSelf: 'center',
    height: 300,
    width: 300,
    resizeMode: 'stretch'
  },
  buttonText: {
    color: 'rgb(92,50,3)',
    fontSize: 30,
    flexDirection: 'column',
    alignSelf: 'center',
    left: 60
  }
})