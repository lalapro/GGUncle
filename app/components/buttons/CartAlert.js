import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import { convertPrice } from '../../helpers';

const { width, height } = Dimensions.get("window");

export default class CartAlert extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', position: 'absolute', backgroundColor: 'lightblue', bottom: 0}}>
        <View stlye={{justifyContent:'space-between'}}>
          <Text>
            Hello World
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize:20,
    color: '#ffffff',
    textAlign: 'center'
  },
  buttonStyle: {
    padding:10,
    backgroundColor: '#202646',
    borderRadius:5,
    minWidth: "80%"
  }
});
