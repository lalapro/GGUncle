import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, TouchableOpacity } from 'react-native';
import { database } from '../../firebase';
import { connect } from 'react-redux';
import actions from '../../actions';

import { Banner } from '../../components';

const { width, height } = Dimensions.get("window");

class LandingPage extends React.Component {

  componentDidMount() {

  }

  navigateToHomeScreen() {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image resizeMode="contain" style={{width: 100, position: 'absolute', zIndex: 10}} source={require('../../assets/van.png')}/>
        <Banner title={"Eat the Dream. On Demand."}/>
        <View style={{flex: 1, justifyContent: 'flex-end', backgroundColor: 'black', width: "100%"}}>
          <TouchableOpacity
            style={styles.buttonStyle}
          >
            <Text style={styles.textStyle}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
          >
            <Text style={styles.textStyle}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  updateMenu: (menu) => dispatch(actions.menuUpdate(menu))
})

export default connect(null, mapDispatchToProps)(LandingPage)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#ffffff',
    textAlign: 'center'
  },
});
