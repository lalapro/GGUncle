import React from 'react';
import { StyleSheet, Text, View, Button, Image, Modal } from 'react-native';
import { database } from '../../firebase';
import { connect } from 'react-redux';
import actions from '../../actions';


import { Banner, ScrollablePage } from '../../components';
import { ItemModal } from '../modals';


class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemSelected: false
    }
  }

  chooseItem(item) {
    this.props.updateCurrentItem(item)
    this.setState({ itemSelected:true });
  }

  close() {
    this.setState({ itemSelected:false })
  }

  componentDidMount() {
    // console.log(this.props.currentCategory.mains, 'store in menu')
  }

  render() {
    const { navigation, cart } = this.props
    cart.items = cart.items || [];
    return (
      <View style={styles.container}>
        <Banner title={"Your Cart"} navigation={navigation} screen={"Home"}/>
        <ItemModal/>
        <ScrollablePage
          cards={cart.items}
          cardStyle="Item"
          clickHandler={this.chooseItem.bind(this)}
        />
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
