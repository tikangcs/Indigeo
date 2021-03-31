import React from 'react';
import { View, Text, Image, Button, SafeAreaView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback} from 'react-native'

export default function ViewItemScreen({setCurrentView}) {

  return (
    <>
    <SafeAreaView style = {styles.container}>
      <TouchableHighlight onPress={() => setCurrentView('Flora')}>
        <View style={styles.closeIcon}>
          <Text style={styles.close}>X</Text>
        </View>
      </TouchableHighlight>
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
          <Text style={styles.tagText}> Popular </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.tags}>
          <Text style={styles.tagText}> Safe </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.tags}>
          <Text style={styles.tagText}> Protected </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.tags}>
          <Text style={styles.tagText}> In Season </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
    <View style={styles.detailContainer}>
      <Text style={styles.detailsHeader}>FLORA FACTS</Text>
      <Text style={styles.detailsCategories}>Scientific Name</Text>
      <Text style={styles.details}>Helianthus</Text>
      <Text style={styles.detailsCategories}>Bloom Period</Text>
      <Text style={styles.details}> Summer & Fall (July - October)</Text>
      <Text style={styles.detailsCategories}>Height</Text>
      <Text style={styles.details}>Grows between 9-16 feet</Text>
      <Text style={styles.detailsCategories}>Origination</Text>
      <Text style={styles.details}>Mexico and Southern USA</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(96,101,121,.1)",
    position:"absolute",
    top: 60,
    right: 20,
  },
  close: {
    fontSize: 40,
    alignSelf: 'center',
    top: 2
  },
  container: {
    flex: 2.5,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    top:20,
    left: 105,
  },
  image: {
    width: 800,
    height: 350,
    top: 40,
    right: 180,
  },
  tagContainer:{
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  tags: {
    alignItems: 'center',
    backgroundColor: '#6ff7b1',
    padding: 10,
    marginHorizontal: 10
  },
  tagText: {
    fontSize: 16
  },
  detailContainer: {
    width: '100%',
    flex: 1.7,
    top: 20
  },
  detailsHeader: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 10
  },
  detailsCategories: {
    fontSize: 18,
    fontWeight: 'bold',
    left: 15
  },
  details: {
    fontSize:22,
    left: 30,
    marginBottom: 10
  }
})