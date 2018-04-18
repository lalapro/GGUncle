import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import genericStyles from '../styles.js';
import { convertPrice } from '../../helpers';

export default class BulletPointCard extends React.Component {
  render() {
    let { item } = this.props;
    if (item.quantity > 0) {
      return (
        <View style={spStyles.container}>
          <View style={genericStyles.flexContainer}>
            <Text style={[spStyles.text, { color: 'white' }]}> 0 </Text>
          </View>
          <View style={[genericStyles.flexContainer, { flex: 3 }]}>
            <Text style={[spStyles.text, { width: '100%' }]}> • {item.name} (x{item.quantity}) </Text>
          </View>
          <View style={[genericStyles.flexContainer, { alignItems: 'flex-end' }]}>
            <Text style={{textAlign: 'right'}}> {convertPrice(item.price * item.quantity)} </Text>
          </View>
        </View>
      )
    } else {
      return null
    }
  }
}

let spStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  text: {
    color: 'black',
    fontSize: 12,
    textAlign: 'left',
    left: 10,
  }
});
