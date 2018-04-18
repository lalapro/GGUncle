import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { database } from '../../firebase';
import { connect } from 'react-redux';
import actions from '../../actions';

import { getQuantity, editCart, convertPrice } from '../../helpers';


import { Banner, ScrollablePage, SubTotalPage, BulletPointCard, QuantityControl } from '../../components';


class EditModal extends React.Component {

  updateSides(side, method) {
    let cart = this.props.cart;
    let main = this.props.item;
    cart = editCart(cart, main.id, method, side.id);
    this.props.updateCart(cart);
  }

  updateMains(main, method) {
    let cart = this.props.cart;
    cart = editCart(cart, main.id, method);
    this.props.updateCart(cart);
  }


  render() {
    let { close, item } = this.props;
    let sides = item.sides ? Object.values(item.sides) : [];
    return (
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: '75%'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', flexWrap: 'wrap', textAlign: 'center'}}>{item.name}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '85%'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>{convertPrice(item.price * item.quantity)}</Text>
          </View>
          <QuantityControl
            item={item}
            quantity={item.quantity}
            touchHandler={this.updateMains.bind(this)}
          />
        </View>
        <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
          {sides.map((side, i) => (
            <View key={side.name} style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 3}}>
                <BulletPointCard item={side}/>
              </View>
              <View style={{flex: 1}}>
                <QuantityControl
                  quantity={side.quantity}
                  touchHandler={this.updateSides.bind(this)}
                  item={side}
                />
              </View>
            </View>
          ))}
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => {close()}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: 'white'}}>Confirm Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCart: (cart) => dispatch(actions.updateCart(cart)),
})

export default connect((store) => {
  return {
    cart: store.cart
  }
}, mapDispatchToProps)(EditModal)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%'
  },
  buttonStyle: {
    margin: 10,
    backgroundColor: '#36B325',
    borderRadius:5,
    minWidth: "60%",
  },
});
