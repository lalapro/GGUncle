import React from 'react';
import { StyleSheet, Text, View, Image, Modal, TouchableOpacity, Dimensions } from 'react-native';

import BulletPointCard from './BulletPointCard';

const { width, height } = Dimensions.get("window");

import { convertPrice } from '../../helpers';

const CARD_HEIGHT = height / 6;
const CARD_WIDTH = width - 50;


export default class CartCard extends React.Component {
  render() {
    let { item, touchHandler } = this.props;
    let sides = Object.values(item.sides);
    return (
      <View style={styles.menuCard}>
        <TouchableOpacity onPress={() => touchHandler(item)}>
          <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', width: '100%'}}>
            <Image
              source={require('../../assets/edit.png')}
              style={{width: 20, height: 20}}
              resizeMode={"contain"}
            />
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>{item.quantity}</Text>
            </View>
            <View style={{flex:4, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{width: '100%', textAlign: 'left'}}>{item.name}</Text>
            </View>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'flex-end'}}>
              <Text style={{textAlign: 'right'}}>{convertPrice(item.price * item.quantity)}</Text>
            </View>
          </View>
          {sides.map((side, i) => (
            <BulletPointCard item={side} key={side.name}/>
          ))}
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
