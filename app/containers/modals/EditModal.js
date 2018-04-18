import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import actions from '../../actions';
import genericStyles from '../styles';
import { getQuantity, editCart, convertPrice } from '../../helpers';
import { Banner, ScrollablePage, SubTotalPage, BulletPointCard, QuantityControl, TextView } from '../../components';


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
      <View style={genericStyles.flexContainer}>
        <TextView
          viewStyle={[genericStyles.flexContainer, { width: '75%' }]}
          textStyle={[genericStyles.modalText, { textAlign: 'center', flexWrap: 'wrap' }]}
          text={item.name}
        />
        <View style={[genericStyles.flexContainer, { width: '85%', justifyContent: 'space-around', flexDirection: 'row' }]}>
          <TextView
            viewStyle={[genericStyles.flexContainer, { alignItems: 'flex-end' }]}
            textStyle={genericStyles.modalText}
            text={convertPrice(item.price * item.quantity)}
          />
          <QuantityControl
            item={item}
            quantity={item.quantity}
            touchHandler={this.updateMains.bind(this)}
          />
        </View>
        <View style={[genericStyles.flexContainer, { flex: 5 }]}>
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
        <View style={[genericStyles.flexContainer, { alignItems: 'flex-end' }]}>
          <TouchableOpacity style={spStyles.buttonStyle} onPress={() => {close()}}>
            <Text style={genericStyles.buttonStyle}>
              Confirm Changes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

let mapDispatchToProps = (dispatch) => ({
  updateCart: (cart) => dispatch(actions.updateCart(cart)),
})

export default connect((store) => {
  return {
    cart: store.cart
  }
}, mapDispatchToProps)(EditModal)

let spStyles = StyleSheet.create({
  buttonStyle: {
    margin: 10,
    backgroundColor: '#36B325',
    borderRadius:5,
    minWidth: "60%",
  },
});
