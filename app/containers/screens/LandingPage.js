import React from 'react';
import { StyleSheet, Text, View, Button, Image, Modal, Dimensions, TextInput, TouchableOpacity, Keyboard, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import actions from '../../actions';
import genericStyles from '../styles';
import { Banner, LandingPageButtons } from '../../components';
import { SignUpNavigator } from '../../navigators';
import { database } from '../../firebase';
const USERREF = database.users;


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpModal: false,
      loginModal: false,
      phone: '',
      password: '',
      notFound: false
    }
  }

  close() {
    this.setState({
      signUpModal: false,
      loginModal: false
    })
  }

  async componentDidMount() {
    let phone = await AsyncStorage.getItem('user');
    if (phone) {
      this.navigateToHomeScreen(phone);
    }
  }

  showModal(modal) {
    if (modal === 'SignUp') {
      this.setState({signUpModal: true});
    } else if (modal === 'Login') {
      let phone = this.state.phone
      if (phone.length !== 10) {
        this.setState({notFound: true})
      } else {
        USERREF.child(phone).once('value', snap => {
          if (snap.val()) {
            if (snap.val() === this.state.password) {
              AsyncStorage.setItem('user', phone)
              this.navigateToHomeScreen(phone);
            }
          } else {
            this.setState({notFound: true})
          }
        })
      }
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

  focus(field) {
    this.refs[field].focus();
  }



  render() {
    let { navigation } = this.props;
    return (
      <View style={[genericStyles.flexContainer, { backgroundColor: 'black' }]}>
        <View style={{flex: 2}}>
          <Banner title={"Eat the Dream. On Demand."}/>
        </View>
        <View style={genericStyles.flexContainer}>
          <Image resizeMode="contain" style={{width: 100, height: 100, zIndex: 99}} source={require('../../assets/van.png')}/>
        </View>
        <View style={{flex: 2, width: '70%', alignItems: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => this.focus("phone")}
            style={{width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}
          >
            <Image
              source={require('../../assets/phone.png')}
              style={{width: 30, height: 40}}
              resizeMode={'contain'}
            />
            <TextInput
              style={spStyles.textStyle}
              placeholder={"Phone Number"}
              onChangeText={(phone) => this.setState({phone})}
              value={this.state.phone}
              keyboardType={"phone-pad"}
              placeholderTextColor={"white"}
              onSubmitEditing={Keyboard.dismiss}
              ref={"phone"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.focus("password")}
            style={{width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/password.png')}
              style={{width: 30, height: 40}}
              resizeMode={'contain'}
            />
            <TextInput
              style={spStyles.textStyle}
              placeholder={"Password"}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              autoCapitalize={"none"}
              placeholderTextColor={"white"}
              onSubmitEditing={Keyboard.dismiss}
              secureTextEntry={true}
              ref={"password"}
            />
          </TouchableOpacity>
          {this.state.notFound ? (
            <View style={{width: '100%'}}>
              <Text
                style={[spStyles.textStyle, {
                  color: 'red',
                  marginBottom: 15,
                  fontSize: 20,
                  margin: 10
              }]}>
                Login credentials are incorrect!
              </Text>
            </View>
          ) : (null)}
        </View>
        <LandingPageButtons touchHandler={this.showModal.bind(this)}/>
        <Modal
          visible={this.state.signUpModal}
          animationType="slide"
          transparent={false}
        >
          <SignUpNavigator screenProps={{
            close: this.close.bind(this),
            login: this.navigateToHomeScreen.bind(this)
          }}/>
        </Modal>
      </View>
    )
  }
}


let mapDispatchToProps = (dispatch) => ({
  getAllCategories: (categories) => dispatch(actions.getAllCategories(categories)),
  updateNavigationStack: (stack) => dispatch(actions.updateNavigationStack(stack)),
  updateAccount: (account) => dispatch(actions.updateAccount(account))
})

export default connect((store) => {
  return {
    allCategories: store.allCategories,
    account: store.account
  }
}, mapDispatchToProps)(LandingPage)

let spStyles = StyleSheet.create({
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
    color: 'white',
    width: "100%",
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
