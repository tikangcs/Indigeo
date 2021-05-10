import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import HomeScreen from "./app/screens/HomeScreen.js";
import LoginScreen from "./app/screens/LoginScreen.js";
import ProfileScreen from "./app/screens/ProfileScreen.js";
import MapScreen from "./app/screens/MapScreen.js";
import DetailScreen from "./app/screens/DetailScreen.js";

export default function App() {
  const [currentView, setCurrentView] = useState("Home");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Permissions.getAsync(Permissions.LOCATION);
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      setLocation(userLocation);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return currentView === "Login" ? (
    <LoginScreen setCurrentView={setCurrentView} />
  ) : currentView === "Map" ? (
    <MapScreen setCurrentView={setCurrentView} location={location} />
  ) : currentView === "Item" ? (
    <DetailScreen setCurrentView={setCurrentView} />
  ) : currentView === "Profile" ? (
    <ProfileScreen setCurrentView={setCurrentView} />
  ) : (
    <HomeScreen setCurrentView={setCurrentView} />
  );
}
