import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen({ setCurrentView }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/login.jpg")}
    >
      <View style={styles.loginContainer}>
        <TextInput
          style={styles.loginInputs}
          placeholder={"Username"}
          placeholderTextColor={"rgba(0,128,0,0.8)"}
          onChange={(username) => setUsername(username)}
        />
        <TextInput
          style={styles.loginInputs}
          placeholder={"Password"}
          placeholderTextColor={"rgba(0,128,0,0.8)"}
          secureTextEntry={true}
          onChange={(password) => setPassword(password)}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => setCurrentView("Profile")}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.otherButtons}>
          <Text style={styles.forgot_button}>Remember Me</Text>
          <Text style={styles.forgot_button}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  logo: {},
  loginContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginInputs: {
    fontSize: 16,
    width: "70%",
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.8)",
  },
  loginButton: {
    width: "70%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(166, 204, 241, 0.8)",
    borderWidth: 1,
  },
  otherButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  forgot_button: {
    height: 30,
    backgroundColor: "rgba(255,255,255,0.8)",
  },
});
