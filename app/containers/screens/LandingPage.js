import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { database } from '../../firebase';
import { connect } from 'react-redux';
import actions from '../../actions';
import test from '../../../microservice/updateMenu.js'

class LandingPage extends React.Component {

  componentDidMount() {

  }

  navigateToHomeScreen() {
    this.props.navigation.navigate('Home');
  }

  checkStore() {
    test();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Landing Page
        </Text>
        <Button
          title="go to home screen"
          onPress={this.navigateToHomeScreen.bind(this)}
        />
        <Button
          title="check store"
          onPress={this.checkStore.bind(this)}
        />
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
});
