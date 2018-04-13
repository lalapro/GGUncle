import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { database } from '../firebase';
import { connect } from 'react-redux';
import actions from '../actions';


import { Banner, ScrollableContent } from '../components';


class Menu extends React.Component {
  chooseItem(item) {
    this.props.navigation.navigate('Item', {item})
  }

  componentDidMount() {
    // console.log(this.props.currentCategory.mains, 'store in menu')
  }

  render() {
    let category = this.props.currentCategory.name;
    let mains = this.props.currentCategory.mains;
    let navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <Banner title={category} navigation={navigation} screen={"Home"}/>
        <ScrollableContent
          cards={mains}
          cardStyle="Menu"
          clickHandler={this.chooseItem.bind(this)}
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
    currentCategory: store.currentCategory
  }
}, mapDispatchToProps)(Menu)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
