import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import { database } from '../../firebase';
import { connect } from 'react-redux';
import actions from '../../actions';

import { Banner, ScrollablePage, CartButton, ItemPage } from '../../components';

import { addToCart, modifySelection } from '../../helpers';

const { width, height } = Dimensions.get("window");

class Item extends React.Component {

  updateCart(selection) {
    let cart = this.props.cart;
    cart = addToCart(selection, cart);
    this.props.updateCart(cart);
    this.props.updateSelection({items: {}, totalPrice: 0});
    this.props.close();
  }


  updateCurrentSelection(itemId, itemObj, method) {
    let selection = this.props.selection;
    selection = modifySelection(itemId, itemObj, method, selection);
    this.props.updateSelection(selection);
  }


  test() {
    console.log('yo')
    /*TODO pagination*/
  }

  render() {
    const item = this.props.currentItem;
    const { navigation, sides, drinks, cart, selection } = this.props;
    // console.log(item)
    return (
      <View style={styles.container}>
        <Image
          onTouchEnd={() => {this.props.close()}}
          source={require('../../assets/exit.png')}
          resizeMode="contain"
          style={{width: 40, height: 40, left: 15, top: 60, position: 'absolute', zIndex: 4}}
        />
        <Banner title={item.name}/>
        <ItemPage
          item={item}
          allSides={sides}
          allDrinks={drinks}
          selection={selection}
          touchHandler={this.updateCurrentSelection.bind(this)}/>
        <Text style={[styles.text, {fontSize: 20, fontWeight: 'bold', textAlign: 'left'}]}>
          Sides
        </Text>
        <ScrollablePage
          cards={item.sides.order}
          allSides={sides}
          allDrinks={drinks}
          cardStyle="RelatedItem"
          title="Sides"
          flex={3}
          direction="column"
          selection={selection}
          touchHandler={this.updateCurrentSelection.bind(this)}
        />
        <CartButton price={selection.totalPrice} touchHandler={this.updateCart.bind(this)} selection={selection}/>
      </View>
    )
  }
}




const mapDispatchToProps = (dispatch) => ({
  updateMenu: (menu) => dispatch(actions.menuUpdate(menu)),
  updateCart: (cart) => dispatch(actions.updateCart(cart)),
  updateSelection: (selection) => dispatch(actions.updateSelection(selection))
})

export default connect((store) => {
  return {
    currentItem: store.currentItem,
    sides: store.sides,
    drinks: store.drinks,
    cart: store.cart,
    selection: store.selection
  }
}, mapDispatchToProps)(Item)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
