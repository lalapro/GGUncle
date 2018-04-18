import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { convertPrice, limitCharacters, getQuantity } from '../../helpers';
import { QuantityControl } from '../buttons';
import TextView from '../TextView'

import genericStyles from '../styles';

let { width, height } = Dimensions.get("window");

export default class ItemPage extends React.Component {
  componentDidMount() {
    if (this.props.selection.totalPrice === 0) {
      this.updateSelection(this.props.item, 'Add')
    }
  }

  updateSelection(item, method) {
    // this function is used to update the currenly selected main into the store
    item.price = item.price || item.productOptions[0].price;
    let obj = {
      name: item.name,
      price: item.price,
      id: item.id,
      quantity: 1
    }
    this.props.touchHandler(item.id, obj, method);
  }

  render() {
    let { name, description, sides } = this.props.item;
    let { allSides, touchHandler, item, selection } = this.props;
    return (
      <View style={[genericStyles.flexContainer, { flex: 5 }]}>
        <View style={[genericStyles.flexContainer, { flex: 3}]}>
          <Image
            style={{width: CARD_WIDTH, height: CARD_HEIGHT}}
            resizeMode="contain"
            source={{uri: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/117944.jpg'}}
          />
          <Text style={spStyles.text}>
            {name}
          </Text>
        </View>
        <View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '85%'}}>
          <TextView
            viewStyle={[genericStyles.flexContainer, { alignItems: 'flex-end' }]}
            textStyle={{fontWeight: 'bold', fontSize: 18}}
            text={convertPrice(item.productOptions[0].price * getQuantity(item.id, selection))}
          />
          <QuantityControl
            item={item}
            quantity={getQuantity(item.id, selection)}
            touchHandler={this.updateSelection.bind(this)}
          />
        </View>
        <TextView
          viewStyle={genericStyles.flexContainer}
          textStyle={[spStyles.text, {fontSize: 12}]}
          text={limitCharacters(description)}
        />
      </View>
    )
  }
}


const CARD_HEIGHT = height / 5;
const CARD_WIDTH = width / 2;

let spStyles = StyleSheet.create({
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
  }
});
