import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 6;
const CARD_WIDTH = width - 50;


export default class MenuCard extends React.Component {

  convertPrice(price) {
    price = price.toString().split('');
    price.splice(price.length - 2, 0, '.');
    price.unshift('$');
    return price.join('');
  }

  render() {
    let menu = this.props.menu;
    let description = this.props.menu.description;
    // console.log(this.props.)
    return (
      <View style={styles.menuCard}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={{width: "100%", height: "100%", flexDirection: 'row'}} onPress={() => this.props.clickHandler(menu)}>
              <View style={{flex: 1}}>
                <Image
                  style={styles.menuImage}
                  resizeMode="cover"
                  source={{uri: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/117944.jpg'}}
                />
              </View>
              <View style={{flex: 2, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <Text style={styles.text}>
                  {menu.name}
                </Text>
                <Text style={styles.text}>
                  {this.convertPrice(menu.productOptions[0].price)}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  menuCard: {
    padding: 3,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
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
