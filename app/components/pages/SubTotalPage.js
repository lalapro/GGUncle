import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { convertPrice, limitCharacters } from '../../helpers';

const { WIDTH, HEIGHT } = Dimensions.get("window");



export default class SubTotalPage extends React.Component {

  render() {
    let { subTotal, tax, grandTotal} = this.props;
    return (
      <View style={{flex: 2, justifyContent: 'space-around', alignItems: 'center', width: "100%"}}>
        <View style={styles.column}>
          <Text>Subtotal</Text>
          <Text>{convertPrice(subTotal)}</Text>
        </View>
        <View style={styles.column}>
          <Text>Tax (15%)</Text>
          <Text>{convertPrice(tax)}</Text>
        </View>
        <View style={styles.column}>
          <Text>Delivery</Text>
          <Text>$5.00</Text>
        </View>
        <View style={styles.column}>
          <Text>Grand Total</Text>
          <Text>{convertPrice(grandTotal)}</Text>
        </View>
      </View>
    )
  }
}


const CARD_HEIGHT = HEIGHT / 5;
const CARD_WIDTH = WIDTH / 2;

let styles = StyleSheet.create({
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
