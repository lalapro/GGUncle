import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

let TextView = ({viewStyle, textStyle, text}) => (
  <View style={viewStyle}>
    <Text style={textStyle}>{text}</Text>
  </View>
)

export default TextView;
