import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import { convertPrice, limitCharacters } from '../../helpers';

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 5;
const CARD_WIDTH = width / 2;


export default class SubTotalPage extends React.Component {

  render() {
    return (
      <View style={{flex: 4, justifyContent: 'space-between', alignItems: 'center', backgroundColor:'lightgreen', width: "100%"}}>
        <View style={styles.column}>
          <Text>Subtotal</Text>
          <Text>$100</Text>
        </View>
        <View style={styles.column}>
          <Text>Promo Credits</Text>
          <Text>$10</Text>
        </View>
        <View style={styles.column}>
          <Text>Tax</Text>
          <Text>15%</Text>
        </View>
        <View style={styles.column}>
          <Text>Delivery</Text>
          <Text>$5.00</Text>
        </View>
        <View style={styles.column}>
          <Text>Tip</Text>
          <Text>13%</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemCard: {
    padding: 3,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: 'black',
    flexWrap: 'wrap',
    textAlign: 'center',
    margin: 5
  },
  column: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "90%"
  }
});
