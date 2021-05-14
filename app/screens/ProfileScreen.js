import React, { useState } from "react";
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
import { auth } from "../utils/firebase";

const Item = ({ title, image, id }) => (
  <View style={styles.item}>
    <ImageBackground style={styles.image} source={image} key={id} />
    <Image style={styles.unfavorite} source={require("../assets/delete.png")} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function ProfileScreen({ setCurrentView, setSignedIn }) {
  const [profile, setProfile] = useState(undefined);

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
          <Text style={styles.usernameText} adjustsFontSizeToFit={true}>
            {user.username}
          </Text>
        </View>
      </View>
      <View style={styles.favoritesContainer}>
        <Text style={styles.favoritesHeadingText}>Favorites</Text>
        <FlatList
          contentContainerStyle={styles.flatList}
          numColumns={3}
          ListEmptyComponent={
            <View>
              <Text>No Favorites</Text>
            </View>
          }
          data={user.favorites}
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
