import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

import { convertPrice } from '../../helpers';

const CARD_HEIGHT = height / 6;
const CARD_WIDTH = width - 50;


export default class CartCard extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.menuCard}>
          <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '90%'}}>
            <Text>{item.quantity}</Text>
            <Text>{item.name}</Text>
            <Text>{convertPrice(item.price * item.quantity)}</Text>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  menuCard: {
    padding: 3,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuImage: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: 'center'
  },
  text: {
    color: 'black',
    textAlign: 'center'
  }
});
