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
      found: false
    }
  }

  back() {
    this.props.screenProps.close()
  }

  confirmSignUp() {
    let phone = this.state.phone;
    USERREF.child(phone).once('value', snap => {
      if (snap.val()) {
        this.setState({found: true})
      } else {
        this.props.navigation.push('Password', {phone})
      }
    })
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
      password: ''
    }
  }

  back() {
    this.props.navigation.goBack();
  }

  confirmSignUp() {
    let phone = this.props.navigation.state.params.phone;
    let password = this.state.password;
    USERREF.child(phone).setValue(password);
    this.props.screenProps.navigation.navigate('Home')
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 9, alignItems: 'center'}}>
          <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <Text style={styles.textStyle}>
              Please Enter Your Password:
            </Text>
            <TextInput
              style={{
                color: 'white',
                width: "80%",
                justifyContent: 'center',
                textAlign: 'center',
                marginLeft: width/2,
                marginRight: width/2,
                fontWeight: 'bold'}}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              autoFocus={true}
              secureTextEntry={true}
            />
          </View>
          <View style={{flex: 8, flexDirection: 'row', alignItems: 'flex-start'}}>
            <GenericButton title={"Back"} touchHandler={this.back.bind(this)}/>
            <GenericButton title={"Confirm"} touchHandler={this.confirmSignUp.bind(this)}/>
          </View>
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
