import React from 'react';
import { StyleSheet, Text, View, Button, Image, Modal } from 'react-native';
import { database } from '../../firebase';
import { connect } from 'react-redux';
import actions from '../../actions';


import { Banner, ScrollablePage, SubTotalPage } from '../../components';
import { ItemModal } from '../modals';


class Cart extends React.Component {

  render() {
    const { navigation, cart } = this.props;
    cart.items = Object.values(cart.items) || [];
    return (
      <View style={styles.container}>
        <Banner title={"Your Cart"} navigation={navigation} screen={"Home"}/>
        <ScrollablePage
          cards={cart.items}
          cardStyle="Cart"
          flex={4}
          // clickHandler={this.chooseItem.bind(this)}
        />
        <SubTotalPage/>
      </View>
    )
  }
}




const mapDispatchToProps = (dispatch) => ({
  updateCurrentItem: (item) => dispatch(actions.updateCurrentItem(item))
})

export default connect((store) => {
  return {
    cart: store.cart
  }
}, mapDispatchToProps)(Cart)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
