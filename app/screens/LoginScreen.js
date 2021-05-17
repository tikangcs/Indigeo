import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { auth } from "../utils/firebase";
import LoginStyles from "../styles/LoginStyles";

const styles = StyleSheet.create(LoginStyles);

export default function LoginScreen({ setCurrentView, setSignedIn }) {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((profile) => {
        setSignedIn(profile.user);
        setCurrentView("Profile");
      })
      .catch((err) => console.log(err));
  };

  return (
    <ImageBackground
      style={styles.loginContainer}
      source={require("../assets/login.jpg")}
    >
      <TouchableWithoutFeedback onPress={() => setCurrentView("Home")}>
        <Image
          style={styles.backButton}
          source={require("../assets/back.png")}
        />
      </TouchableWithoutFeedback>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.loginInputs}
            label="Email"
            placeholder="Email"
            placeholderTextColor={"rgba(128,128,128,1.0)"}
            autoCorrect={false}
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
            placeholderTextColor={"rgba(128,128,128,1.0)"}
            autoCapitalize={"none"}
            autoCorrect={false}
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
    </ImageBackground>
  );
}
