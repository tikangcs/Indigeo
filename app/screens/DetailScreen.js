import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import DetailStyles from "../styles/DetailStyles";
import images from "../sample/images";
import { db } from "../utils/firebase";

const styles = StyleSheet.create(DetailStyles);

export default function DetailScreen({
  setCurrentView,
  currentItem,
  signedIn,
}) {
  // const addFavorite = db
  //   .collection("profile")
  //   .doc("MSdZr5PKSlGyzqplsnzJ")
  //   .update({ favorites: currentItem })
  //   .then(() => console.log("write successful"))
  //   .catch((err) => console.error("error writing file", err));

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
              source={images[currentItem.title].uri}
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
          <Text style={styles.detailsCategories}>Fun Facts</Text>
          <ScrollView>
            <Text style={styles.details}>{currentItem.funFacts}</Text>
          </ScrollView>
        </View>
        {signedIn ? (
          <View style={styles.favoriteContainer}>
            <TouchableWithoutFeedback
              onPress={() => console.log("added to favorites")}
            >
              <Text style={styles.favoriteButton}>Add to Favorite</Text>
            </TouchableWithoutFeedback>
          </View>
        ) : (
          <></>
        )}
      </SafeAreaView>
    </>
  );
}
