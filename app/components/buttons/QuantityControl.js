import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { convertPrice } from '../../helpers';
import TextView from '../TextView';


export default class QuantityControl extends React.Component {

  render() {
    let { quantity, item, touchHandler } = this.props;
    return (
      <View style={spStyles.container}>
        <TouchableOpacity onPress={() => touchHandler(item, 'Remove')}>
          <Text style={spStyles.text}> - </Text>
        </TouchableOpacity>
        <Text style={{marginLeft: 5, marginRight: 5}}>
          {quantity}
        </Text>
        <TouchableOpacity onPress={() => touchHandler(item, 'Add')}>
          <Text style={spStyles.text}> + </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

let spStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    left: 20
  },
  text: {
    fontSize:25,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
