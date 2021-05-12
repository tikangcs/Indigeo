import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

export default function DetailScreen({ setCurrentView, currentItem }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.exit}>
            <TouchableWithoutFeedback onPress={() => setCurrentView("Map")}>
              <Image source={require("../assets/close.png")} />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/Sunflower.jpg")}
            />
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>{currentItem.title}</Text>
          </View>
        </View>
        <View style={styles.tagContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.tags}>
              <View style={styles.tagHeader}>
                <Text style={styles.tagHeaderText}> Seasonality </Text>
              </View>
              <View style={styles.tagBody}>
                <Text style={styles.tagBodyText}>
                  {" "}
                  {currentItem.seasonality}{" "}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.tags}>
              <View style={styles.tagHeader}>
                <Text style={styles.tagHeaderText}> Status </Text>
              </View>
              <View style={styles.tagBody}>
                <Text style={styles.tagBodyText}> {currentItem.status} </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.tags}>
              <View style={styles.tagHeader}>
                <Text style={styles.tagHeaderText}> Safety Rating </Text>
              </View>
              <View style={styles.tagBody}>
                <Text style={styles.tagBodyText}> {currentItem.safety} </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailsCategories}>Scientific Name</Text>
          <Text style={styles.details}>{currentItem.description}</Text>
          <Text style={styles.detailsCategories}>Fun Fact</Text>
          <ScrollView>
            <Text style={styles.details}>{currentItem.funFacts}</Text>
          </ScrollView>
        </View>
        <View style={styles.favoriteContainer}>
          <TouchableWithoutFeedback>
            <Text style={styles.favoriteButton}>Add to Favorite</Text>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 6,
  },
  exit: {
    flex: 1,
    flexDirection: "row",
    marginRight: "5%",
    justifyContent: "flex-end",
  },
  title: {
    flex: 1,
    alignItems: "center",
    marginVertical: "2%",
  },
  titleText: {
    fontSize: 46,
    fontWeight: "bold",
  },
  imageContainer: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderWidth: 1,
    height: 270,
    width: 250,
  },
  tagContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tags: {
    alignItems: "center",
    justifyContent: "center",
  },
  tagHeader: {
    width: "105%",
    paddingVertical: "2%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "#f0e130",
  },
  tagBody: {
    width: "105%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  tagHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tagBodyText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  detailContainer: {
    flex: 5,
  },
  detailsCategories: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: "5%",
  },
  details: {
    fontSize: 20,
    marginHorizontal: "5%",
    marginBottom: "2%",
  },
  favoriteContainer: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    backgroundColor: "#abcdef",
    margin: "5% 1%",
  },
  favoriteButton: {
    fontSize: 24,
  },
});
