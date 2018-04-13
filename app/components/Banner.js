import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export default class ScrollableContent extends React.Component {

  goBack() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.banner}>
        <Image
          source={require('../assets/logo.png')}
          resizeMode="contain"
          style={{height: 60}}
        />
        {this.props.navigation ? (
          <View onTouchEnd={() => {this.goBack()}}>
            <Image
              source={require('../assets/back.png')}
              resizeMode="contain"
              style={{width: 40, height: 40, left: -width/2 + 15, top: -30, position: 'absolute'}}
            />
          </View>
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
