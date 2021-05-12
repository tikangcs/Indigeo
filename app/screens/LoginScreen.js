import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { auth } from "../utils/firebase.js";

export default function LoginScreen({ setCurrentView, signedIn, setSignedIn }) {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => console.log(err))
      .then(signedIn ? setCurrentView("Profile") : setCurrentView("Login"));
  };

  auth.onAuthStateChanged((user) => {
    if (user) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  });

  return (
    <ImageBackground
      style={styles.loginContainer}
      source={require("../assets/login.jpg")}
    >
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.loginInputs}
            label="Email"
            placeholder="Email"
            placeholderTextColor={"rgba(0,128,0,0.8)"}
            autoCapitalize={"none"}
            maxLength={30}
            onChangeText={(value) => {
              onChange(value);
            }}
            value={value}
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.loginInputs}
            label="Password"
            placeholder="Password"
            placeholderTextColor={"rgba(0,128,0,0.8)"}
            autoCapitalize={"none"}
            maxLength={15}
            secureTextEntry
            onChangeText={(value) => {
              onChange(value);
            }}
            value={value}
          />
        )}
        name="password"
        rules={{ required: true }}
        defaultValue=""
      />
      <TouchableOpacity
        style={styles.loginButton}
        title="login"
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <Button
        title="Continue as Guest"
        onPress={() => setCurrentView("Map")}
      ></Button>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
});
