import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import TextView from '../TextView.js';
const { width, height } = Dimensions.get("window");
import genericStyles from '../styles';


export default class CategoryCard extends React.Component {
  render() {
    let category = this.props.category;

    return (
      <View style={spStyles.categoryCard}>
        <TouchableOpacity style={spStyles.categoryCard} onPress={() => this.props.clickHandler(category.id, category.name)}>
          <Image
            style={spStyles.cardImage}
            resizeMode="cover"
            source={{uri: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/117944.jpg'}}
          />
          <TextView
            viewStyle={[genericStyles.flexContainer, { position: 'absolute'}]}
            textStyle={spStyles.text}
            text={category.name}
          />
        </TouchableOpacity>
      </View>
    )
  }
}


const CARD_HEIGHT = height / 6;
const CARD_WIDTH = width / 2 - 20;

const spStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  categoryCard: {
    padding: 3,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardImage: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
    alignSelf: 'center'
  },
  text: {
    position: 'absolute',
    color: 'white'
  },
});
