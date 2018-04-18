import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import { convertPrice } from '../../helpers';

const { width, height } = Dimensions.get("window");

export default class QuantityControl extends React.Component {

  render() {
    const { quantity, item, touchHandler } = this.props;
    return (
      <View style={{flex: 1, flexDirection: 'row', width: '100%', justifyContent: 'flex-start', alignItems: 'center', left: 20}}>
        <TouchableOpacity onPress={() => touchHandler(item, 'Remove')}>
          <Text style={styles.textStyle}>
            -
          </Text>
        </TouchableOpacity>
        <Text style={{marginLeft: 10, marginRight: 10}}>
          {quantity}
        </Text>
        <TouchableOpacity onPress={() => touchHandler(item, 'Add')}>
          <Text style={styles.textStyle}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize:25,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  buttonStyle: {
    padding:10,
    backgroundColor: '#32CD32',
    borderRadius:5,
    width: "100%",
    flexDirection: 'column',
    flex: 1
  }
});
