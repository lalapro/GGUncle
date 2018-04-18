import React from 'react';
import { StyleSheet, Text, View, Image, Modal, TouchableOpacity, Dimensions } from 'react-native';
import genericStyles from '../styles';
import BulletPointCard from './BulletPointCard';
import TextView from '../TextView.js';
import { convertPrice } from '../../helpers';
let { width, height } = Dimensions.get("window");

export default class CartCard extends React.Component {
  render() {
    let { item, touchHandler } = this.props;
    let sides = Object.values(item.sides);
    return (
      <View style={spStyles.menuCard}>
        <TouchableOpacity onPress={() => touchHandler(item)}>
          <View style={spStyles.container}>
            <Image
              source={require('../../assets/edit.png')}
              style={{width: 20, height: 20}}
              resizeMode={"contain"}
            />
            <TextView
              viewStyle={genericStyles.flexContainer}
              textStyle={genericStyles.text}
              text={item.quantity}
            />
            <TextView
              viewStyle={[genericStyles.flexContainer, { flex: 4 }]}
              textStyle={[genericStyles.text, { width: '100%', textAlign: 'left' }]}
              text={item.name}
            />
            <TextView
              viewStyle={genericStyles.flexContainer}
              textStyle={[genericStyles.text, { textAlign: 'right' }]}
              text={convertPrice(item.price * item.quantity)}
            />
          </View>
          {sides.map((side, i) => (
            <BulletPointCard
              item={side}
              key={side.name}
            />
          ))}
        </TouchableOpacity>
      </View>
    )
  }
}


const CARD_HEIGHT = height / 6;
const CARD_WIDTH = width - 50;

const spStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%'
  },
  menuCard: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
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
