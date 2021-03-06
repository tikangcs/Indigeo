import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import MapScreen from "./app/screens/MapScreen";
import DetailScreen from "./app/screens/DetailScreen";
import { db, auth } from "./app/utils/firebase";

export default function App() {
  const [currentView, setCurrentView] = useState("Home");
  const [currentItem, setCurrentItem] = useState(0);
  const [location, setLocation] = useState(null);
  const [signedIn, setSignedIn] = useState(auth.currentUser);

  useEffect(() => {
    (async () => {
      let { status } = await Permissions.getAsync(Permissions.LOCATION);
      if (status !== "granted") {
        return;
      }

      Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          distanceInterval: 160,
        },
        (loc) => {
          setLocation(loc);
        }
      );
    })();
  }, []);

  return currentView === "Home" ? (
    <HomeScreen setCurrentView={setCurrentView} />
  ) : currentView === "Map" ? (
    <MapScreen
      setCurrentView={setCurrentView}
      setCurrentItem={setCurrentItem}
      location={location}
      signedIn={signedIn}
    />
  ) : currentView === "Item" ? (
    <DetailScreen
      setCurrentView={setCurrentView}
      currentItem={currentItem}
      signedIn={signedIn}
    />
  ) : currentView === "Profile" ? (
    <ProfileScreen
      setCurrentView={setCurrentView}
      signedIn={signedIn}
      setSignedIn={setSignedIn}
    />
  ) : (
    <LoginScreen setCurrentView={setCurrentView} setSignedIn={setSignedIn} />
  );
}
