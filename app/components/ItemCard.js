import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 5;
const CARD_WIDTH = width / 2;


export default class ItemCard extends React.Component {

  convertPrice(price) {
    price = price.toString().split('');
    price.splice(price.length - 2, 0, '.');
    price.unshift('$');
    return price.join('');
  }

  render() {
    let item = this.props.item;
    let description = this.props.item.description;
    // console.log(this.props.)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'lightgreen'}}>
        <Image
          style={{width: CARD_WIDTH, height: CARD_HEIGHT, margin: 15}}
          resizeMode="contain"
          source={{uri: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/117944.jpg'}}
        />
        <Text style={styles.text}>
          {item.name}
        </Text>
        <Text style={[styles.text, {fontSize: 15}]}>
          {item.description}
        </Text>
        <Text style={[styles.text, {fontSize: 15}]}>
          {item.description}
        </Text>
        <Text style={[styles.text, {fontSize: 15}]}>
          {item.description}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemCard: {
    padding: 3,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: 'black',
    flexWrap: 'wrap',
  }
});
