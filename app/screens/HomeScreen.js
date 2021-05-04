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

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  logo: {
    flex: 2,
    alignSelf: "center",
    height: "40%",
    width: "80%",
    resizeMode: "stretch",
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  buttonText: {
    alignSelf: "center",
    color: "rgb(92,50,3)",
    fontSize: 30,
    fontWeight: "bold",
  },
  buttons: {
    width: "50%",
    height: "17%",
    backgroundColor: "rgba(166, 204, 241, 0.7)",
    justifyContent: "center",
    borderWidth: 1,
  },
});
