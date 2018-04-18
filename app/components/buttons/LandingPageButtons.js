import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import genericStyles from '../styles.js';

export default class LandingPageButtons extends React.Component {
  render() {
    let { touchHandler } = this.props;
    return (
      <View style={spStyles.flexContainer}>
        <TouchableOpacity
          style={spStyles.buttonStyle}
          onPress={() => {touchHandler('Login')}}
        >
          <Text style={genericStyles.buttonText}> Login </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={spStyles.buttonStyle}
          onPress={() => {touchHandler('SignUp')}}
        >
          <Text style={genericStyles.buttonText}> Sign Up </Text>
        </TouchableOpacity>
      </View>
    )
  }
}


let spStyles = StyleSheet.create({
  flexContainer: {
    flex: 6,
    alignItems: 'center',
    width: "100%"
  },
  buttonStyle: {
    padding:10,
    margin: 10,
    bottom: 20,
    backgroundColor: '#36B325',
    borderRadius:5,
    minWidth: "80%"
  }
});
