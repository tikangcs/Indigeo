import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import user from "../utils/profile";
import ProfileStyles from "../styles/ProfileStyles";
import images from "../sample/images";
import { db, auth } from "../utils/firebase";

const Item = ({ title, id }) => (
  <View style={styles.item}>
    <ImageBackground style={styles.image} source={images[title].uri} key={id} />
    <TouchableWithoutFeedback onPress={() => console.log("removed favorite")}>
      <Image
        style={styles.unfavorite}
        source={require("../assets/delete.png")}
      />
    </TouchableWithoutFeedback>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function ProfileScreen({
  setCurrentView,
  signedIn,
  setSignedIn,
}) {
  const [personalFavorites, setPersonalFavorites] = useState([]);

  useEffect(() => {
    db.collection("profile")
      .where("email", "==", signedIn.email)
      .get()
      .then((query) => {
        let favs;
        query.forEach((doc) => (favs = doc.data().favorites));
        setPersonalFavorites(favs);
        console.log(personalFavorites);
      })
      .catch((err) =>
        console.log("Error retreiving favorites from Firestore:", err)
      );
  }, []);

  const renderItem = ({ item }) => (
    <Item title={item.title} image={item.image} id={item.id} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profilePhotoContainer}>
          <Image style={styles.profilePhoto} source={user.profilePhoto} />
        </View>
        <View style={styles.usernameContainer}>
          <Text style={styles.welcomeText}>Welcome back explorer</Text>
          <Text style={styles.usernameText} adjustsFontSizeToFit={true}>
            {user.username}
          </Text>
          <Text></Text>
          <Text style={styles.subtext}>{user.membership}</Text>
          <Text style={styles.subtext}>Member since {user.membersince}</Text>
        </View>
      </View>
      <View style={styles.favoritesContainer}>
        <View style={styles.favoritesHeadingContainer}>
          <Text style={styles.favoritesHeadingText}>
            Favorites ({personalFavorites.length})
          </Text>
        </View>
        <FlatList
          contentContainerStyle={styles.flatList}
          numColumns={3}
          ListEmptyComponent={
            <View>
              <Text>No Favorites Added Yet</Text>
            </View>
          }
          data={personalFavorites}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableWithoutFeedback onPress={() => setCurrentView("Map")}>
          <View style={styles.continue}>
            <Text style={styles.continueText}>Continue to Map</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            auth.signOut();
            setSignedIn(null);
            setCurrentView("Home");
          }}
        >
          <View style={styles.logout}>
            <Text style={styles.logoutText}>Logout</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(ProfileStyles);
