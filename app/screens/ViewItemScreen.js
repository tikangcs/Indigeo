import React from 'react';
import { View, Text, Image, Button, SafeAreaView, StyleSheet, TouchableWithoutFeedback} from 'react-native'

export default function ViewItemScreen(props) {
  return (
    <>
    <SafeAreaView style = {styles.container}>
      <View style={styles.closeIcon}></View>
      <Text style={styles.title}>Sunflower</Text>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/Sunflower.jpg')}
      />
    </SafeAreaView>
    <View style={styles.tagContainer}>
      <TouchableWithoutFeedback>
        <View style={styles.tags}>
          <Text style={styles.tagText}> Edible</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.tags}>
          <Text style={styles.tagText}> Endangered</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
    <View style={styles.detailContainer}>
      <Text style={styles.details}>FLORA FACTS</Text>
      <Text style={styles.details}>Common Name: Sunflower</Text>
      <Text style={styles.details}>Scientific Name: Helianthus</Text>
      <Text style={styles.details}>Taxonomy: Kingdom:	Plantae, Clade:	Tracheophytes, Clade:	Angiosperms, Clade:	Eudicots, Clade:	Asterids, Order:	Asterales, Family:	Asteraceae, Subfamily:	Asteroideae, Supertribe:	Helianthodae, Tribe:	Heliantheae, Genus:	Helianthus</Text>
      <Text style={styles.details}>Fun Fact: The seed and sprout have many medicinal uses</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position:"absolute",
    top: 60,
    right: 20,
  },
  container: {
    backgroundColor: "dodgerblue",
    flex: 2.5,
  },
  title: {
    fontSize: 50,
    top:20,
    left: 110
  },
  image: {
    width: 800,
    height: 350,
    top: 40,
    right: 180,
  },
  tagContainer:{
    backgroundColor: "orange",
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tags: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginHorizontal: 20
  },
  tagText: {
    fontSize: 18
  },
  detailContainer: {
    width: '100%',
    flex: 1.7,
    top: 20
  },
  details: {
    fontSize:22,
  }
})