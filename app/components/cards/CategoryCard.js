import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';



let { width, height } = Dimensions.get("window");

let CARD_HEIGHT = height / 6;
let CARD_WIDTH = width / 2 - 20;

export default class CategoryCard extends React.Component {
  render() {
    let category = this.props.category;
    return (
      <View style={styles.categoryCard}>
        <TouchableOpacity style={styles.categoryCard} onPress={() => this.props.clickHandler(category.id, category.name)}>
          <Image
            style={styles.cardImage}
            resizeMode="cover"
            source={{uri: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/117944.jpg'}}
          />
          <View style={{justifyContent: 'center', alignItems: 'center', position: 'absolute'}}>
            <Text style={styles.text}>
              {category.name}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

let styles = StyleSheet.create({
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
  }
});
