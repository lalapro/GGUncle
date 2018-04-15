import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import { convertPrice } from '../../helpers';

const { width, height } = Dimensions.get("window");

export default class QuantityControl extends React.Component {

  getQuantity() {
    if (this.props.selection.items[this.props.id]) {
      return this.props.selection.items[this.props.id].quantity;
    } else {
      return 0
    }
  }

  render() {
    const { touchHandler, item, quantity } = this.props;
    return (
      <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'red', width: '100%', justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => touchHandler(item, 'Remove')}>
          <Text style={styles.textStyle}>
            -
          </Text>
        </TouchableOpacity>
        <Text style={{marginLeft: 10, marginRight: 10}}>
          {this.getQuantity()}
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
    fontSize:20,
    color: '#ffffff',
    textAlign: 'center'
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
