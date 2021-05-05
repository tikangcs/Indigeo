import React, { useState } from "react";
import HomeScreen from "./app/screens/HomeScreen.js";
import LoginScreen from "./app/screens/LoginScreen.js";
import ProfileScreen from "./app/screens/ProfileScreen.js";
import MapScreen from "./app/screens/MapScreen.js";
import DetailScreen from "./app/screens/DetailScreen.js";

export default function App() {
  const [currentView, setCurrentView] = useState("Home");
  return currentView === "Login" ? (
    <LoginScreen setCurrentView={setCurrentView} />
  ) : currentView === "Map" ? (
    <MapScreen setCurrentView={setCurrentView} />
  ) : currentView === "Item" ? (
    <DetailScreen setCurrentView={setCurrentView} />
  ) : currentView === "Profile" ? (
    <ProfileScreen setCurrentView={setCurrentView} />
  ) : (
    <HomeScreen setCurrentView={setCurrentView} />
  );
}
