import React from "react";
import { TouchableWithoutFeedback, View, Text } from "react-native";

export default (styling, event, text) => {
  return (
    <TouchableWithoutFeedback onPress={event}>
      <View style={styling.buttons}>
        <Text style={styling.buttonText}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
