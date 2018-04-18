import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

import { convertPrice } from '../../helpers';

const CARD_HEIGHT = height / 6;
const CARD_WIDTH = width - 50;


export default class BulletPointCard extends React.Component {
  render() {
    let { item } = this.props;
    if (item.quantity > 0) {
      return (
        <View style={styles.bulletPoint}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 12}}>0</Text>
          </View>
          <View style={{flex:3, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{width: '100%', textAlign: 'left', left: 10, fontSize: 12}}> • {item.name} (x{item.quantity})</Text>
          </View>
          <View style={{flex:1, justifyContent: 'center', alignItems: 'flex-end'}}>
            <Text style={{textAlign: 'right'}}>{convertPrice(item.price * item.quantity)}</Text>
          </View>
        </View>
      )
    } else {
      return null
    }
  }
}

const styles = StyleSheet.create({
  bulletPoint: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  text: {
    color: 'black',
    textAlign: 'center'
  }
});
