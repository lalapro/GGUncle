import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

let { width, height } = Dimensions.get("window");
import { convertPrice } from '../../helpers';

import genericStyles from '../styles';



export default class MenuCard extends React.Component {

  render() {
    let menu = this.props.menu;
    let description = this.props.menu.description;
    // console.log(this.props.)
    return (
      <View style={spStyles.menuCard}>
          <View style={genericStyles.flexContainer}>
            <TouchableOpacity style={{width: "100%", height: "100%", flexDirection: 'row'}} onPress={() => this.props.clickHandler(menu)}>
              <View style={{flex: 1}}>
                <Image
                  style={spStyles.menuImage}
                  resizeMode="cover"
                  source={{uri: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/117944.jpg'}}
                />
              </View>
              <View style={[genericStyles.flexContainer, { flex: 2 }]}>
                <Text style={spStyles.text}>
                  {menu.name}
                </Text>
                <Text style={spStyles.text}>
                  {convertPrice(menu.productOptions[0].price)}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}
const CARD_HEIGHT = height / 6;
const CARD_WIDTH = width - 50;

let spStyles = StyleSheet.create({
  menuCard: {
    padding: 3,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuImage: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: 'center'
  },
  text: {
    color: 'black',
    textAlign: 'center'
  }
});
