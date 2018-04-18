import React from 'react';
import { StyleSheet, Text, View, Button, Image, Modal, Dimensions, TextInput, TouchableOpacity, Keyboard, AsyncStorage } from 'react-native';
import { database } from '../../firebase';
import { connect } from 'react-redux';
import actions from '../../actions';

import { Banner, LandingPageButtons } from '../../components';
import { SignUpModal } from '../modals';

import SignUpNavigator from '../../navigators/SignUpNavigator'

const { width, height } = Dimensions.get("window");

const USERREF = database.users;

class LoadingPage extends React.Component {

  componentDidMount() {
    setTimeout(() => {this.checkAsyncStorage()}, 500);
  }

  async checkAsyncStorage() {
    let phone = await AsyncStorage.getItem('user');
    if (phone) {
      this.navigateToHomeScreen(phone);
    } else {
      this.props.navigation.navigate('LandingPage');
    }
  }

  navigateToHomeScreen(phone) {
    this.props.getAllCategories().then(res => {
      this.props.updateNavigationStack(['Home']);
      this.props.updateAccount({
        phone: phone,
        login: true
      })
      this.props.navigation.navigate('Home');
    });
  }


  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image resizeMode="contain" style={{width: 100, position: 'absolute', zIndex: 10, top: 50}} source={require('../../assets/van.png')}/>
        <Banner title={"Eat the Dream. On Demand."}/>
        <View style={{flex: 3, backgroundColor: 'black', width: '70%', alignItems: 'flex-start'}}>
          <Text style={styles.textStyle}>
            Loading....
          </Text>
        </View>
        <View style={{flex: 1}}>
        </View>
      </View>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  getAllCategories: (categories) => dispatch(actions.getAllCategories(categories)),
  updateAccount: (account) => dispatch(actions.updateAccount(account))
})

export default connect((store) => {
  return {
    account: store.account
  }
}, mapDispatchToProps)(LoadingPage)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    padding:10,
    margin: 10,
    bottom: 20,
    backgroundColor: '#202646',
    borderRadius:5,
    minWidth: "80%"
  },
  textStyle: {
    fontSize:20,
    margin: 10,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
});
