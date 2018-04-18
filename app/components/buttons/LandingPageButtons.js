import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, TouchableOpacity } from 'react-native';


export default class LandingPageButtons extends React.Component {
  render() {
    const { touchHandler } = this.props;
    return (
      <View style={{flex: 1, justifyContent: 'flex-end', backgroundColor: 'black', width: "100%"}}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {touchHandler('Login')}}
        >
          <Text style={styles.textStyle}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {touchHandler('SignUp')}}
        >
          <Text style={styles.textStyle}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  buttonStyle: {
    padding:10,
    margin: 10,
    bottom: 20,
    backgroundColor: '#202646',
    borderRadius:5,
    minWidth: "80%"
  },
  textStyle: {
    fontSize:20,
    color: '#ffffff',
    textAlign: 'center'
  },
});
