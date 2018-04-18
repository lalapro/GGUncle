import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import actions from '../../actions';
import { Banner, ScrollablePage, GenericButton, ItemPage } from '../../components';
import { convertPrice, addToCart, modifySelection } from '../../helpers';

let { width, height } = Dimensions.get("window");

class Item extends React.Component {
  updateCart(selection) {
    let cart = this.props.cart;
    cart = addToCart(selection, cart);
    this.props.updateCart(cart);
    this.props.updateSelection({items: {}, totalPrice: 0});
    this.props.close();
  }


  updateCurrentSelection(itemId, itemObj, method, sides) {
    let selection = this.props.selection;
    selection = modifySelection(itemId, itemObj, method, selection, sides);
    this.props.updateSelection(selection);
  }


  test() {
    console.log('yo')
    /*TODO pagination*/
  }

  render() {
    let item = this.props.currentItem;
    let { navigation, sides, cart, selection } = this.props;
    let price = convertPrice(price);
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
          selection={selection}
          touchHandler={this.updateCurrentSelection.bind(this)}/>
        <Text style={[styles.text, {fontSize: 20, fontWeight: 'bold', textAlign: 'left'}]}>
          Sides
        </Text>
        <ScrollablePage
          main={item}
          cards={item.sides.order}
          allSides={sides}
          cardStyle="RelatedItem"
          title="Sides"
          flex={3}
          direction="column"
          selection={selection}
          touchHandler={this.updateCurrentSelection.bind(this)}
        />
        <GenericButton
          title={`Add To Cart ${convertPrice(selection.totalPrice)}`}
          touchHandler={() => {this.updateCart(selection)}}
          color={'#36B325'}
        />
      </View>
    )
  }
}




let mapDispatchToProps = (dispatch) => ({
  updateMenu: (menu) => dispatch(actions.menuUpdate(menu)),
  updateCart: (cart) => dispatch(actions.updateCart(cart)),
  updateSelection: (selection) => dispatch(actions.updateSelection(selection))
})

export default connect((store) => {
  return {
    currentItem: store.currentItem,
    sides: store.sides,
    cart: store.cart,
    selection: store.selection
  }
}, mapDispatchToProps)(Item)

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
