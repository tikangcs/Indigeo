import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";

const tagHeaders = (styling, title, property) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styling.tags}>
        <View style={styling.tagHeader}>
          <Text style={styling.tagHeaderText}> {title} </Text>
        </View>
        <View style={styling.tagBody}>
          <Text style={styling.tagBodyText}> {property} </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default tagHeaders;
