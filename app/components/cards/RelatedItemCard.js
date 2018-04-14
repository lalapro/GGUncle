import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

import { convertPrice } from '../../helpers';

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 6;
const CARD_WIDTH = width - 50;

export default class RelatedItemCard extends React.Component {

  addToCart(item) {
    let obj = {
      name: item.name,
      price: item.price,
    }
    this.props.touchHandler(item.id, obj);
  }

  render() {
    const { title, item, itemKey, touchHandler } = this.props;
    return (
      <View style={styles.menuCard}>
        <TouchableOpacity onPress={() => {this.addToCart(itemKey[item])}}>
          <View style={{flex: 1}} >
            <Text style={styles.text}>
              {itemKey[item].name}
            </Text>
            <Text style={styles.text}>
              {convertPrice(itemKey[item].price)}
            </Text>
          </View>
        </TouchableOpacity>
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
