import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

import { convertPrice, getQuantity } from '../../helpers';
import { QuantityControl } from '../buttons';

let { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 6;
const CARD_WIDTH = width - 50;

export default class RelatedItemCard extends React.Component {

  updateSelection(side, method) {
    let main = this.props.main;
    let obj = {
      name: side.name,
      price: side.price,
      quantity: 1,
      id: side.id
    }
    this.props.touchHandler(main.id, obj, method, side.id);
  }

  render() {
    let { title, item, itemKey, touchHandler, selection, main } = this.props;
    return (
      <View style={styles.menuCard}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '85%'}} >
          <View style={{flex: 3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{flex: 2}}>
              <Text style={[styles.text, {textAlign: 'left'}]}>
                {itemKey[item].name}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={[styles.text, {fontSize: 14}]}>
                ({convertPrice(itemKey[item].price)})
              </Text>
            </View>
          </View>
          <QuantityControl
            item={itemKey[item]}
            quantity={getQuantity(main.id, selection, item)}
            touchHandler={this.updateSelection.bind(this)}
          />
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  menuCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
    flexWrap: 'wrap',
    textAlign: 'center',
    margin: 5
  }
});
