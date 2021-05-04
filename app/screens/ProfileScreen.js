import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollableView,
  Text,
  Image,
} from "react-native";

export default function ProfileScreen({ setCurrentView }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.areaOne}>
        <Text>PROFILE HEADER</Text>
      </View>
      <View style={styles.areaTwo}>
        <Text>TRENDING AND RECOMMENDATIONS</Text>
      </View>
      <View style={styles.areaThree}>
        <Text>FAVORITED ITEMS IN LIST AND CAROUSEL FORMAT</Text>
      </View>
      <View style={styles.areaFour}>
        <Text>SHARE BUTTONS</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  areaOne: {
    flex: 1.5,
    backgroundColor: "orange",
  },
  areaTwo: {
    flex: 1,
    backgroundColor: "red",
  },
  areaThree: {
    flex: 6,
    backgroundColor: "green",
  },
  areaFour: {
    flex: 0.7,
    backgroundColor: "blue",
  },
});
