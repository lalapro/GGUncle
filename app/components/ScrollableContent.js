import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

import CategoryCard from './CategoryCard';
import MenuCard from './MenuCard';
import ItemPage from './ItemPage';
import CartButton from './CartButton';
// import { CategoryCard, ItemPage } from '../components'



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
    return (
      <View style={styles.content}>
        <ScrollView
          style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
          contentContainerStyle={{justifyContent: 'center', alignItems: 'center', width: "100%"}}
        >
          <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
            {this.props.cards ? (
              this.props.cards.map((card, i) => this.cardToRender(this.props.cardStyle, card))
            ) : (
              <ItemPage
                item={this.props.item}
                touchHandler={this.props.touchHandler}
                allDrinks={this.props.allDrinks}
                allSides={this.props.allSides}
                key={this.props.item.id}
              />
            )}
          </View>
        </ScrollView>
      </View>
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
