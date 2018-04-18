import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import genericStyles from './styles.js';
import { convertPrice } from '../../helpers';

export default class CartAlert extends React.Component {
  render() {
    let { cart, navigation } = this.props;
    return (
      <View style={spStyles.container}>
        <TouchableOpacity
          style={spStyles.button}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={genericStyles.text}>{convertPrice(cart.totalPrice)}</Text>
          <Text style={genericStyles.text}>View Cart</Text>
          <Text style={genericStyles.text}>{cart.totalQuantity}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

let spStyles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: 50,
    bottom: 0,
    width: "100%",
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#36B325',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
