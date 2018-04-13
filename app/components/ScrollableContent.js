import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

import CategoryCard from './CategoryCard';
import MenuCard from './MenuCard';
import ItemCard from './ItemCard';

// import { CategoryCard, ItemCard } from '../components'



export default class ScrollableContent extends React.Component {

  convertPrice(price) {
    price = price.toString().split('');
    price.splice(price.length - 2, 0, '.');
    price.unshift('$');
    return price.join('');
  }

  cardToRender(cardStyle, card) {
    if (cardStyle === 'Category') {
      return (
        <CategoryCard
          category={card}
          clickHandler={this.props.clickHandler}
          key={card.id}
        />
      )
    } else if (cardStyle === 'Menu') {
      return (
        <MenuCard
          menu={card}
          clickHandler={this.props.clickHandler}
          key={card.id}
        />
      )
    }
  }

  render() {
    // console.log(this.props.item);
    return (
      this.props.cards ? (
        <View style={styles.content}>
          <ScrollView
            style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
            contentContainerStyle={{justifyContent: 'center', alignItems: 'center', width: "100%"}}
          >
            <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
              {this.props.cards.map((card, i) => this.cardToRender(this.props.cardStyle, card))}
            </View>
          </ScrollView>
        </View>
      ) : (
        <View style={styles.content}>
          <View style={{position: 'absolute', bottom: 0, zIndex: 2}}>
            <Text style={styles.text}>
              {this.convertPrice(this.props.item.productOptions[0].price)}
            </Text>
          </View>
          <ScrollView
            style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
            contentContainerStyle={{justifyContent: 'center', alignItems: 'center', width: "100%"}}
          >
            <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
              <ItemCard
                item={this.props.item}
                clickHandler={this.props.clickHandler}
                key={this.props.item.id}
              />
            </View>
          </ScrollView>
        </View>
      )
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 8,
    // backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: "100%"
  },
  text: {
    fontSize: 25,
    color: 'black',
    flexWrap: 'wrap',
  }
})
