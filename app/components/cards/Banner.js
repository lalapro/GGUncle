import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

let { WIDTH, HEIGHT } = Dimensions.get("window");

export default class Banner extends React.Component {
  render() {
    let { flex, back } = this.props;
    flex = flex || 2;
    return (
      <View style={[spStyles.banner, {flex: flex}]}>
        <Image
          source={require('../../assets/logo.png')}
          resizeMode="contain"
          style={{height: 60}}
        />
        {back ? (
          <TouchableOpacity
            onPress={() => back()}
            style={{zIndex: 99}}
          >
            <Image
              source={require('../../assets/back.png')}
              resizeMode="contain"
              style={spStyles.backImage}
            />
          </TouchableOpacity>
        ) : (null)}
        <Text style={spStyles.text}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

let spStyles = StyleSheet.create({
  banner: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    backgroundColor: 'black'
  },
  backImage: {
    width: 40,
    height: 40,
    left: -WIDTH/2 + 15,
    top: -30,
    position: 'absolute'
  },
  text: {
    top: 15,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
