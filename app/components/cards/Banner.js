import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export default class ScrollablePage extends React.Component {

  goBack() {
    this.props.navigation.navigate(this.props.screen);
  }

  render() {
    let { flex, back } = this.props;
    flex = flex || 2;
    return (
      <View style={[styles.banner, {flex: flex}]}>
        <Image
          source={require('../../assets/logo.png')}
          resizeMode="contain"
          style={{height: 60}}
        />
        {back ? (
          <TouchableOpacity onPress={() => back()} style={{zIndex: 20}}>
            <Image
              source={require('../../assets/back.png')}
              resizeMode="contain"
              style={{width: 40, height: 40, left: -width/2 + 15, top: -30, position: 'absolute'}}
            />
          </TouchableOpacity>
        ) : (null)}
        <Text style={{top: 15, color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  banner: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    backgroundColor: 'black'
  },
});
