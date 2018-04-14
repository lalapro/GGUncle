import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import { convertPrice, limitCharacters } from '../../helpers';

import { RelatedItemCard } from '../cards';

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 5;
const CARD_WIDTH = width / 2;


export default class ItemPage extends React.Component {

  render() {
    const { name, description, sides, drinks } = this.props.item;
    const { allDrinks, allSides, touchHandler } = this.props;
    return (
      <View style={{flex: 5, justifyContent: 'center', alignItems: 'center', backgroundColor:'lightgreen', width: "100%"}}>
        <Image
          style={{width: CARD_WIDTH, height: CARD_HEIGHT, margin: 15}}
          resizeMode="contain"
          source={{uri: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/117944.jpg'}}
        />
        <Text style={styles.text}>
          {name}
        </Text>
        <Text style={[styles.text, {fontSize: 15}]}>
          {limitCharacters(description)}
        </Text>
        {/* <RelatedItemCard title={"Sides"} items={sides.order} itemKey={allSides} touchHandler={touchHandler}/>
        <RelatedItemCard title={"Drinks"} items={drinks.order} itemKey={allDrinks} touchHandler={touchHandler}/> */}
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
    textAlign: 'center',
    margin: 5
  }
});
