import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import genericStyles from '../styles';
import TextView from '../TextView';
let { width, height } = Dimensions.get("window");

export default class Banner extends React.Component {
  render() {
    let { flex, back } = this.props;
    flex = flex || 2;
    return (
      <View style={[spStyles.banner, {flex: flex}]}>
        {back ? (
          <TouchableOpacity
            onPress={() => back()}
            style={[genericStyles.flexContainer, {zIndex: 1}]}
          >
            <Image
              source={require('../../assets/back.png')}
              resizeMode="contain"
              style={spStyles.backImage}
            />
          </TouchableOpacity>
        ) : (
          <TextView
            viewStyle={genericStyles.flexContainer}
            text={"Placeholder"}
          />
        )}
        <View style={[genericStyles.flexContainer, { flex: 4 }]}>
          <Image
            source={require('../../assets/logo.png')}
            resizeMode="contain"
            style={{height: 60}}
          />
          <Text style={spStyles.text}>
            {this.props.title}
          </Text>
        </View>
        <TextView
          viewStyle={genericStyles.flexContainer}
          text={"Placeholder"}
        />
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
    backgroundColor: 'black',
    flexDirection: 'row'
  },
  backImage: {
    width: 40,
    height: 40,
    left: 10
  },
  text: {
    top: 15,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
