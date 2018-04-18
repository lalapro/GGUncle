import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import genericStyles from '../styles.js';
import { convertPrice } from '../../helpers';

export default class GenericButton extends React.Component {
  render() {
    let { title, touchHandler, color } = this.props;
    color = color || '#202646';
    return (
      <View style={spStyles.container}>
        <View style={{justifyContent:'space-between'}}>
          <TouchableOpacity
            style={[spStyles.button, { backgroundColor: color }]}
            onPress={() => touchHandler()}
          >
            <Text style={genericStyles.buttonText}> {title} </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

let spStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    padding:10,
    backgroundColor: '#202646',
    borderRadius:5,
    minWidth: "80%"
  }
});
