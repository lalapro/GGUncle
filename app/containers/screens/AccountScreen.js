import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import actions from '../../actions';
import { Banner, ScrollablePage, CartAlert } from '../../components';
import { ItemModal } from '../modals';


class AccountScreen extends React.Component {
  logout() {
    this.props.updateNavigationStack([]);
    this.props.updateAccount({});
    AsyncStorage.clear();
    this.props.navigation.navigate('LandingPage');

  }

  render() {
    return (
      <View style={styles.container}>
        <Banner title={"Account Information"}/>
        <View style={{flex: 7, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Your Phone is: {this.props.account.phone}</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={this.logout.bind(this)}
            style={styles.buttonStyle}
          >
            <Text style={{color:'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center'}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}




let mapDispatchToProps = (dispatch) => ({
  updateCurrentItem: (item) => dispatch(actions.updateCurrentItem(item)),
  updateSelection: (selection) => dispatch(actions.updateSelection(selection)),
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
