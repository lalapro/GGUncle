import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import { convertPrice } from '../../helpers';

const { width, height } = Dimensions.get("window");

export default class GenericButton extends React.Component {
  render() {
    const { title, touchHandler } = this.props;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{justifyContent:'space-between'}}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => touchHandler()}
          >
            <Text style={styles.textStyle}>{title}</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#202646',
    borderRadius:5,
    minWidth: "80%"
  }
});
