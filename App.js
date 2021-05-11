import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import HomeScreen from "./app/screens/HomeScreen.js";
import LoginScreen from "./app/screens/LoginScreen.js";
import ProfileScreen from "./app/screens/ProfileScreen.js";
import MapScreen from "./app/screens/MapScreen.js";
import DetailScreen from "./app/screens/DetailScreen.js";
import { db } from "./app/utils/firebase.js";

export default function App() {
  const [currentView, setCurrentView] = useState("Home");
  const [currentItem, setCurrentItem] = useState(0);
  const [markers, setMarkers] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    //query from the firebase db
    const ref = db.collection("markers");
    ref.onSnapshot((query) => {
      const objs = [];
      query.forEach((doc) => {
        objs.push({ id: doc.id, ...doc.data() });
      });
      setMarkers(objs);
    });

    //retreive users current location
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
    <MapScreen
      setCurrentView={setCurrentView}
      setCurrentItem={setCurrentItem}
      location={location}
      markers={markers}
    />
  ) : currentView === "Item" ? (
    <DetailScreen
      setCurrentView={setCurrentView}
      currentItem={markers[currentItem]}
    />
  ) : currentView === "Profile" ? (
    <ProfileScreen setCurrentView={setCurrentView} />
  ) : (
    <HomeScreen setCurrentView={setCurrentView} />
  );
}
