import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import { convertPrice } from '../../helpers';

const { width, height } = Dimensions.get("window");

export default class CartAlert extends React.Component {
  render() {
    const { cart, navigation } = this.props;
    return (
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center', position: 'absolute', backgroundColor: 'lightblue', bottom: 0, width: "100%", height: 50}}>
        <TouchableOpacity
          style={{flex: 1, flexDirection: 'row', backgroundColor: '#36B325', width: '100%', justifyContent: 'space-around', alignItems: 'center'}}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.textStyle}>{convertPrice(cart.totalPrice)}</Text>
          <Text style={styles.textStyle}>View Cart</Text>
          <Text style={styles.textStyle}>{cart.totalQuantity}</Text>
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
    backgroundColor: '#32CD32',
    borderRadius:5,
    width: "100%",
    flexDirection: 'column',
    flex: 1
  }
});
