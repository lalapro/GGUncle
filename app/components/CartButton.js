import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import { convertPrice } from '../helpers';

const { width, height } = Dimensions.get("window");

export default class CartButton extends React.Component {
  render() {
    const { price, touchHandler, selection } = this.props;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={styles.buttonStyle}
          onPress={() => touchHandler(selection)}
        >
          <Text style={styles.textStyle}>Add To Cart {convertPrice(price)}</Text>
        </TouchableOpacity>
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
    borderRadius:5
  }
});
