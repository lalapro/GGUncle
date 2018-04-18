import React from 'react';
import { StyleSheet, Text, View, Button, Image, Modal, Dimensions, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { database } from '../firebase';

import { Banner, GenericButton } from '../components'


let { width, height } = Dimensions.get("window");

let USERREF = database.users;

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      found: false,
      validPhone: true
    }
  }

  back() {
    this.props.screenProps.close()
  }

  confirmSignUp() {
    let phone = this.state.phone;
    if (phone.length === 10) {
      USERREF.child(phone).once('value', snap => {
        if (snap.val()) {
          this.setState({found: true})
        } else {
          this.props.navigation.push('Password', {phone})
        }
      })
    } else {
      this.setState({validPhone: false});
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
          <Text style={styles.textStyle}>
            Please Enter Your Phone Number:
          </Text>
          <TextInput
            style={{
              fontSize: 20,
              color: 'white',
              width: "100%",
              fontWeight: 'bold',
              marginLeft: width/2,
              marginRight: width/2
            }}
            keyboardType={'phone-pad'}
            onChangeText={(phone) => this.setState({phone})}
            value={this.state.phone}
            autoFocus={true}
          />
        </View>
        {this.state.found ? (
          <View>
            <Text style={[styles.textStyle, {color: 'red', marginBottom: 15}]}>
              You've already signed up!!
            </Text>
          </View>
        ) : (null)}
        {!this.state.validPhone ? (
          <View>
            <Text style={[styles.textStyle, {color: 'red', marginBottom: 15}]}>
              Not a valid phone number!
            </Text>
          </View>
        ) : (null)}
        <View style={{flex: 3, flexDirection: 'row', alignItems: 'flex-start'}}>
          <GenericButton title={"Back"} touchHandler={this.back.bind(this)}/>
          <GenericButton title={"Confirm"} touchHandler={this.confirmSignUp.bind(this)}/>
        </View>
      </View>
    )
  }
}

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      validPassword: true
    }
  }

  back() {
    this.props.navigation.goBack();
  }

  confirmSignUp() {
    let phone = this.props.navigation.state.params.phone;
    let password = this.state.password;
    if (password.length === 6) {
      let user = {};
      user[phone] = password;
      USERREF.update(user);
      this.props.screenProps.close();
      this.props.screenProps.login(phone)
    } else {
      this.setState({validPassword: false})
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
          <Text style={styles.textStyle}>
            Please Enter Your Password
          </Text>
          <TextInput
            style={{
              fontSize: 20,
              color: 'white',
              width: "100%",
              fontWeight: 'bold',
              marginLeft: width/2,
              marginRight: width/2
            }}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            autoCorrect={false}
            autoCapitalize={"none"}
            autoFocus={true}
          />
        </View>
        {!this.state.validPassword ? (
          <View>
            <Text style={[styles.textStyle, {color: 'red', marginBottom: 15}]}>
              Password must be 6 characters
            </Text>
          </View>
        ) : (null)}
        <View style={{flex: 3, flexDirection: 'row', alignItems: 'flex-start'}}>
          <GenericButton title={"Back"} touchHandler={this.back.bind(this)}/>
          <GenericButton title={"Confirm"} touchHandler={this.confirmSignUp.bind(this)}/>
        </View>
      </View>
    )
  }
}



let SignUpNavigator = StackNavigator(
  {
    Phone: { screen: Phone },
    Password: { screen: Password }
  },
  {
    navigationOptions: {
      header: <Banner title={"Sign Up"} flex={0.3}/>
    }
  }
);

export default SignUpNavigator


let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize:22,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center'
  },
});
