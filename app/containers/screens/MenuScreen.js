import React from 'react';
import { StyleSheet, Text, View, Button, Image, Modal } from 'react-native';
import { connect } from 'react-redux';
import actions from '../../actions';
import genericStyles from '../styles';
import { Banner, ScrollablePage, CartAlert } from '../../components';
import { ItemModal } from '../modals';


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemSelected: false
    }
  }

  chooseItem(item) {
    if (this.props.currentItem.id !== item.id) {
      this.props.updateCurrentItem(item);
      this.props.updateSelection({items: {}, totalPrice: 0});
    }
    this.setState({ itemSelected:true });
  }

  close() {
    this.setState({ itemSelected:false })
  }

  back() {
    let navStack = this.props.navStack;
    navStack.pop();
    this.props.updateNavigationStack(navStack);
    this.props.navigation.navigate(navStack[navStack.length - 1]);
  }

  render() {
    let category = this.props.currentCategory.name;
    let mains = this.props.currentCategory.mains;
    let navigation = this.props.navigation;
    let { cart } = this.props;
    return (
      <View style={styles.container}>
        <Banner title={category} back={this.back.bind(this)}/>
        <ScrollablePage
          cards={mains}
          cardStyle="Menu"
          clickHandler={this.chooseItem.bind(this)}
        />
        <Modal
          visible={this.state.itemSelected}
          animationType="slide"
          transparent={false}
        >
          <ItemModal close={this.close.bind(this)}/>
        </Modal>
        {cart.totalPrice > 0 ? (
          <CartAlert cart={cart} navigation={navigation}/>
        ) : (null)}
      </View>
    )
  }
}




let mapDispatchToProps = (dispatch) => ({
  updateCurrentItem: (item) => dispatch(actions.updateCurrentItem(item)),
  updateSelection: (selection) => dispatch(actions.updateSelection(selection)),
  updateNavigationStack: (stack) => dispatch(actions.updateNavigationStack(stack))
})

export default connect((store) => {
  return {
    currentCategory: store.currentCategory,
    currentItem: store.currentItem,
    cart: store.cart,
    navStack: store.navStack
  }
}, mapDispatchToProps)(Menu)

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
