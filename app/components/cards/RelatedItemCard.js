import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

import { convertPrice } from '../../helpers';
import { QuantityControl } from '../buttons';

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 6;
const CARD_WIDTH = width - 50;

export default class RelatedItemCard extends React.Component {

  updateSelection(item, method) {
    console.log(item)
    let obj = {
      name: item.name,
      price: item.price,
    }
    this.props.touchHandler(item.id, obj, method);
  }

  render() {
    const { title, item, itemKey, touchHandler, selection } = this.props;
    return (
      <View style={styles.menuCard}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'lightblue', width: '85%'}} >
          <View style={{flex: 3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={styles.text}>
              {itemKey[item].name}
            </Text>
            <Text style={[styles.text, {fontSize: 14}]}>
              ({convertPrice(itemKey[item].price)})
            </Text>
          </View>
          <QuantityControl
            id={item}
            item={itemKey[item]}
            selection={selection}
            touchHandler={this.updateSelection.bind(this)}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
