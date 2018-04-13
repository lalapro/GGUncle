import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { database } from '../firebase';
import { connect } from 'react-redux';
import actions from '../actions';


import { Banner, ScrollableContent } from '../components';


class Item extends React.Component {
  addToCart(item) {

  }

  render() {
    let item = this.props.navigation.state.params.item;
    let navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <Banner title={item.name} navigation={navigation} screen={"Menu"}/>
        <ScrollableContent
          item={item}
          cardStyle="Item"
          clickHandler={this.addToCart.bind(this)}
        />
      </View>
    )
  }
}




const mapDispatchToProps = (dispatch) => ({
  updateMenu: (menu) => dispatch(actions.menuUpdate(menu))
})

export default connect((store) => {
  return {

  }
}, mapDispatchToProps)(Item)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
