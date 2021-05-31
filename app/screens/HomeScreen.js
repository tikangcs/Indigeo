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
import homeButtons from "../components/homeButtons";

const styles = StyleSheet.create(HomeStyles);

export default function HomeScreen({ setCurrentView }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/Home5.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/Logo.png")} />
      <View style={styles.buttonContainer}>
        {homeButtons(styles, () => setCurrentView("Login"), "LOGIN")}
        {homeButtons(styles, () => setCurrentView("Map"), "GUEST")}
      </View>
    </ImageBackground>
  );
}
