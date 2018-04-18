import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

// simple wrapper used for View + Text combo, easier to control flex

let TextView = ({viewStyle, textStyle, text}) => (
  <View style={viewStyle}>
    <Text style={textStyle}>{text}</Text>
  </View>
)

export default TextView;
