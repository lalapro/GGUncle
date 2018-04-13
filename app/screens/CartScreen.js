import React from 'react';
import { StyleSheet, Text, View, Button, Image, Modal } from 'react-native';
import { database } from '../firebase';
import { connect } from 'react-redux';
import actions from '../actions';


import { Banner, ScrollableContent } from '../components';
import ItemScreen from './ItemScreen';


class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemSelected: false
    }
  }

  chooseItem(item) {
    this.props.updateCurrentItem(item)
    this.setState({ itemSelected:true });
  }

  close() {
    this.setState({ itemSelected:false })
  }

  componentDidMount() {
    // console.log(this.props.currentCategory.mains, 'store in menu')
  }

  render() {
    // let category = this.props.currentCategory.name;
    // let mains = this.props.currentCategory.mains;
    let navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <Banner title={"Your Cart"} navigation={navigation} screen={"Home"}/>
        {/* <ScrollableContent
          // cards={mains}
          // cardStyle="Menu"
          // clickHandler={this.chooseItem.bind(this)}
        /> */}
      </View>
    )
  }
}




const mapDispatchToProps = (dispatch) => ({
  updateCurrentItem: (item) => dispatch(actions.updateCurrentItem(item))
})

export default connect((store) => {
  return {
    cart: store.cart
  }
}, mapDispatchToProps)(Cart)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
