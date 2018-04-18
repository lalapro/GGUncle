import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import actions from '../../actions';
import genericStyles from '../styles'
import { Banner, ScrollablePage, CartAlert, TextView } from '../../components';
import { ItemModal } from '../modals';


class AccountScreen extends React.Component {

  logout() {
    // logout should clear AsyncStorage, cart, selection, and navigation stack;
    this.props.updateNavigationStack([]);
    this.props.updateAccount({});
    this.props.updateCart({ items: {}, totalPrice: 0, totalQuantity: 0});
    AsyncStorage.clear();
    this.props.navigation.navigate('LandingPage');

  }

  render() {
    return (
      <View style={styles.container}>
        <Banner title={"Account Information"}/>
        <TextView
          viewStyle={[genericStyles.flexContainer, { flex: 7 }]}
          text={`Your Phone is: ${this.props.account.phone}`}
        />
        <View style={genericStyles.flexContainer}>
          <TouchableOpacity
            onPress={this.logout.bind(this)}
            style={styles.buttonStyle}
          >
            <Text style={genericStyles.buttonStyle}> Logout </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}




let mapDispatchToProps = (dispatch) => ({
  updateCart: (cart) => dispatch(actions.updateCart(cart)),
  updateNavigationStack: (stack) => dispatch(actions.updateNavigationStack(stack)),
  updateAccount: (account) => dispatch(actions.updateAccount(account))
})

export default connect((store) => {
  return {
    account: store.account
  }
}, mapDispatchToProps)(AccountScreen)

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    padding:10,
    backgroundColor: '#36B325',
    borderRadius:5,
    minWidth: "80%"
  }
});
