import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Modal from 'react-native-modal'
import { connect } from 'react-redux';
import actions from '../../actions';
import { Banner, ScrollablePage, SubTotalPage } from '../../components';
import { EditModal } from '../modals';



class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editItem: false
    }
  }

  componentDidMount() {
    let navStack = this.props.navStack;
    navStack.push('Cart');
    this.props.updateNavigationStack(navStack);
  }

  back() {
    let navStack = this.props.navStack;
    navStack.pop();
    this.props.updateNavigationStack(navStack);
    this.props.navigation.navigate(navStack[navStack.length - 1]);
  }

  openHistory(selected) {
    this.setState({editItem: true, item: selected});
  }

  close() {
    this.setState({editItem: false});
  }

  render() {
    let { navigation, cart } = this.props;
    let subTotal = cart.totalPrice;
    let tax = Math.round(cart.totalPrice * 0.15);
    let grandTotal = subTotal + tax + 500
    let cartItems = Object.values(cart.items) || [];
    // console.log(cart);
    return (
      <View style={styles.container}>
        <Banner title={"Your Cart"} back={this.back.bind(this)}/>
        {cartItems.length === 0 ? (
          <View style={{flex: 6, justifyContent: 'center', alignItems: 'center'}}>
            <Text>
              Your cart is empty!
            </Text>
          </View>
        ) : (
          <ScrollablePage
            cards={cartItems}
            cardStyle="Cart"
            touchHandler={this.openHistory.bind(this)}
            flex={6}
          />
        )}
        <SubTotalPage subTotal={subTotal} tax={tax} grandTotal={grandTotal}/>
        <Modal
          isVisible={this.state.editItem}
          animationIn={'slideInUp'}
          animationOut={'slideOutDown'}
        >
          <View style={[styles.otherModal, {height: "50%"}]}>
            <EditModal
              close={this.close.bind(this)}
              item={this.state.item}
            />
          </View>
        </Modal>
      </View>
    )
  }
}




let mapDispatchToProps = (dispatch) => ({
  updateCurrentItem: (item) => dispatch(actions.updateCurrentItem(item)),
  updateNavigationStack: (stack) => dispatch(actions.updateNavigationStack(stack))
})

export default connect((store) => {
  return {
    cart: store.cart,
    navStack: store.navStack
  }
}, mapDispatchToProps)(Cart)

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otherModal: {
    backgroundColor: 'white',
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    height: "60%"
  }
});
