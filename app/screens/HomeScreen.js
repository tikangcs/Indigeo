import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import HomeStyles from "../styles/HomeStyles";

const styles = StyleSheet.create(HomeStyles);

export default function HomeScreen({ setCurrentView }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/Home5.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/Logo.png")} />
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={() => setCurrentView("Login")}>
          <View style={styles.buttons}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setCurrentView("Map")}>
          <View style={styles.buttons}>
            <Text style={styles.buttonText}>GUEST</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ImageBackground>
  );
}
