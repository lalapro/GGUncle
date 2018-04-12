import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { database } from '../firebase';
import { connect } from 'react-redux';
import actions from '../actions';


const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 6;
const CARD_WIDTH = width / 2 - 20;

export default class Card extends React.Component {
  render() {
    let category = this.props.category;
    return (
      <View style={styles.card}>
        <TouchableOpacity style={styles.card} onPress={() => this.props.chooseCategory(category.id)}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    padding: 3,
    // elevation: 2,
    // backgroundColor: "#FFF",
    // margin: 5,
    // borderColor: 'black',
    // borderWidth: 5,
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
