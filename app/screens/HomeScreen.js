import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export default function HomeScreen({ setCurrentView }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/Home5.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/Logo.png")} />

      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={() => setCurrentView("Login")}>
          <View style={styles.loginButton}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setCurrentView("Map")}>
          <View style={styles.guestButton}>
            <Text style={styles.buttonText}>GUEST</Text>
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
  logo: {
    flex: 2,
    position: "absolute",
    top: 40,
    alignSelf: "center",
    height: 300,
    width: 300,
    resizeMode: "stretch",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonText: {
    color: "rgb(92,50,3)",
    fontSize: 30,
    flexDirection: "column",
    alignSelf: "center",
    left: 60,
  },
  loginButton: {
    width: "50%",
    height: 70,
    backgroundColor: "rgba(166, 204, 241, 0.7)",
    flexDirection: "row",
    borderWidth: 1,
  },
  guestButton: {
    width: "50%",
    height: 70,
    backgroundColor: "rgba(166, 204, 241, 0.7)",
    flexDirection: "row",
    borderWidth: 1,
    color: "rgba(3, 54, 1, 1)",
  },
});
