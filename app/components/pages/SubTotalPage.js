import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { convertPrice, limitCharacters } from '../../helpers';




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


let styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "90%"
  }
});
