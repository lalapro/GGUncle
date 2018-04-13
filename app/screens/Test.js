import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { database } from '../firebase';
import { connect } from 'react-redux';
import actions from '../actions';

class Test extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Test
        </Text>
      </View>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  updateMenu: (menu) => dispatch(actions.menuUpdate(menu))
})

export default connect(null, mapDispatchToProps)(Test)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
