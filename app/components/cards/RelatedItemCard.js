import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

import { convertPrice, getQuantity } from '../../helpers';
import { QuantityControl } from '../buttons';
import TextView from '../TextView';
import genericStyles from '../styles'

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
      <View style={spStyles.menuCard}>
        <View style={[spStyles.flexContainer, { width: '85%' }]} >
          <View style={[spStyles.flexContainer, { flex: 3 }]}>
            <TextView
              viewStyle={{flex: 2}}
              textStyle={[spStyles.text, {textAlign: 'left'}]}
              text={itemKey[item].name}
            />
            <TextView
              viewStyle={{flex: 1}}
              textStyle={[spStyles.text, {fontSize: 14}]}
              text={`(${convertPrice(itemKey[item].price)})`}
            />
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

let spStyles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
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
