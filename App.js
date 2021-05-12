import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import HomeScreen from "./app/screens/HomeScreen.js";
import LoginScreen from "./app/screens/LoginScreen.js";
import ProfileScreen from "./app/screens/ProfileScreen.js";
import MapScreen from "./app/screens/MapScreen.js";
import DetailScreen from "./app/screens/DetailScreen.js";
import { db, auth } from "./app/utils/firebase.js";

export default function App() {
  const [currentView, setCurrentView] = useState("Home");
  const [currentItem, setCurrentItem] = useState(0);
  const [markers, setMarkers] = useState([]);
  const [location, setLocation] = useState(null);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    //query the markers from the firebase db
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

  return currentView === "Home" ? (
    <HomeScreen setCurrentView={setCurrentView} />
  ) : currentView === "Map" ? (
    <MapScreen
      setCurrentView={setCurrentView}
      setCurrentItem={setCurrentItem}
      location={location}
      markers={markers}
      signedIn={signedIn}
    />
  ) : currentView === "Item" ? (
    <DetailScreen
      setCurrentView={setCurrentView}
      currentItem={markers[currentItem]}
    />
  ) : currentView === "Profile" ? (
    <ProfileScreen setCurrentView={setCurrentView} />
  ) : (
    <LoginScreen
      setCurrentView={setCurrentView}
      signedIn={signedIn}
      setSignedIn={setSignedIn}
    />
  );
}
