import React from 'react';
import { StyleSheet, Text, View, Button, Image, Modal } from 'react-native';
import { database } from '../firebase';
import { connect } from 'react-redux';
import actions from '../actions';


import { Banner, ScrollableContent } from '../components';
import ItemScreen from './ItemScreen';


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemSelected: false
    }
  }

  chooseItem(item) {
    if (this.props.currentItem.id !== item.id) {
      this.props.updateCurrentItem(item);
      this.props.updateSelection({items: {}, totalPrice: 0});
    }
    this.setState({ itemSelected:true });
  }

  close() {
    this.setState({ itemSelected:false })
  }

  componentDidMount() {
    // setTimeout(() => {console.log('drinks...', this.props.drinks, 'oyoyoyo')}, 1000)
  }

  render() {
    let category = this.props.currentCategory.name;
    let mains = this.props.currentCategory.mains;
    let navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <Banner title={category} navigation={navigation}/>
        <ScrollableContent
          cards={mains}
          cardStyle="Menu"
          clickHandler={this.chooseItem.bind(this)}
        />
        <Modal
          visible={this.state.itemSelected}
          animationType="slide"
          transparent={false}
        >
          <ItemScreen close={this.close.bind(this)}/>
        </Modal>
      </View>
    )
  }
}




const mapDispatchToProps = (dispatch) => ({
  updateCurrentItem: (item) => dispatch(actions.updateCurrentItem(item)),
  updateSelection: (selection) => dispatch(actions.updateSelection(selection)),
})

export default connect((store) => {
  return {
    currentCategory: store.currentCategory,
    drinks: store.drinks,
    currentItem: store.currentItem
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
