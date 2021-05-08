import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollableView,
  Text,
  Image,
  ImageBackground,
  Button,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import user from "../utils/profile";

const Item = ({ title, image, id }) => (
  <View style={styles.item}>
    <ImageBackground style={styles.image} source={image} key={id} />
    <Image style={styles.unfavorite} source={require("../assets/delete.png")} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function ProfileScreen({ setCurrentView }) {
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
        <Text style={styles.favoritesHeadingText}>Your Favorites</Text>
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
      <TouchableWithoutFeedback onPress={() => setCurrentView("Home")}>
        <View style={styles.logout}>
          <Text style={styles.logoutText}>Logout</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 1.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  profilePhotoContainer: {
    flex: 2,
    alignItems: "center",
  },
  profilePhoto: {
    height: "60%",
    width: "60%",
    borderWidth: 1,
    borderRadius: 50,
    resizeMode: "stretch",
  },
  usernameContainer: {
    flex: 3,
    height: "25%",
  },
  usernameText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  favoritesContainer: {
    flex: 4,
    borderWidth: 1,
    margin: "2% 2%",
    alignItems: "center",
    padding: "0 3%",
  },
  favoritesHeadingText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  flatList: {
    alignItems: "center",
  },
  unfavorite: {
    position: "absolute",
    right: "5%",
    top: "5%",
  },
  item: {
    margin: "1.5% 2%",
    alignItems: "center",
    borderWidth: 1,
    padding: "1%",
  },
  title: {
    fontSize: 20,
  },
  image: {
    width: 110,
    height: 110,
  },
  logout: {
    flex: 0.5,
    margin: "3%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "dodgerblue",
  },
  logoutText: {
    fontSize: 30,
  },
});
