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

const styles = StyleSheet.create(DetailStyles);

export default function DetailScreen({ setCurrentView, currentItem }) {
  let imageurl = undefined;
  for (let item in images) {
    if (currentItem.title === item) {
      imageurl = images[item].uri;
    }
  }
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
            <Image style={styles.image} source={imageurl} />
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
