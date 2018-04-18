import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

import { CategoryCard, MenuCard, RelatedItemCard, CartCard } from '../cards';
import ItemPage from './ItemPage'
import { CartButton } from '../buttons';



export default class ScrollablePage extends React.Component {
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
    } else if (cardStyle === 'RelatedItem') {
      return (
        <RelatedItemCard
          main={this.props.main}
          title={this.props.title}
          item={card}
          selection={this.props.selection}
          itemKey={this.props.allSides}
          touchHandler={this.props.touchHandler}
          key={card}
        />
      )
    } else if (cardStyle === 'Cart') {
      return (
        <CartCard
          item={card}
          touchHandler={this.props.touchHandler}
          key={card.name}
        />
      )
    }
  }

  render() {
    const flex = this.props.flex || 8;
    const direction = this.props.direction || 'row';
    return (
      <View style={[styles.content, {flex: this.props.flex || 8}]}>
        <ScrollView
          style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
          contentContainerStyle={{justifyContent: 'center', alignItems: 'center', width: "100%"}}
        >
          <View style={{flex: 1, flexWrap: 'wrap', flexDirection: direction, justifyContent: 'center'}}>
            {this.props.cards.map((card, i) => this.cardToRender(this.props.cardStyle, card))}
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
