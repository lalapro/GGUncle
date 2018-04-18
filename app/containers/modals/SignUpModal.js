import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { database } from '../../firebase';
import { connect } from 'react-redux';
import actions from '../../actions';

import { Banner } from '../../components'
import SignUpNavigator from '../../navigators/SignUpNavigator';


const { width, height } = Dimensions.get("window");

class SignUpModal extends React.Component {
  render () {
    return (
      // <View style={styles.container}>
      //   {/* <Banner title={"Sign Up"}/> */}
      //   {/* <View style={{flex: 2, backgroundColor: 'lightgreen', width: "40%", justifyContent: 'center'}}>
      //     <Text>
      //       Hi hello
      //     </Text>
      //   </View> */}
      //   {/* <View style={{flex: 1}}> */}
      //     <SignUpNavigator screenProps={"hi"}/>
      //   {/* </View> */}
      // </View>
      //
      <SignUpNavigator screenProps={"hi"}/>
    )
  }
}



const mapDispatchToProps = (dispatch) => ({
})

export default connect((store) => {
  return {

  }
}, mapDispatchToProps)(SignUpModal)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
