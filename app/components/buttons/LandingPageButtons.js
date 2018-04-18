import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import genericStyles from './styles.js';

export default class LandingPageButtons extends React.Component {
  render() {
    let { touchHandler } = this.props;
    return (
      <View style={spStyles.container}>
        <TouchableOpacity
          style={spStyles.buttonStyle}
          onPress={() => {touchHandler('Login')}}
        >
          <Text style={genericStyles.textStyle}> Login </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={spStyles.buttonStyle}
          onPress={() => {touchHandler('SignUp')}}
        >
          <Text style={genericStyles.textStyle}> Sign Up </Text>
        </TouchableOpacity>
      </View>
    )
  }
}


let spStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    width: "100%"
  },
  buttonStyle: {
    padding:10,
    margin: 10,
    bottom: 20,
    backgroundColor: '#202646',
    borderRadius:5,
    minWidth: "80%"
  }
});
