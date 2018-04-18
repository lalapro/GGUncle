import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import actions from '../../actions';
import genericStyles from '../styles';
import { Banner, CategoryCard, ScrollablePage, CartAlert } from '../../components';


console.disableYellowBox = true;
class Home extends React.Component {

  chooseCategory(id, category) {
    this.props.updateSides();
    let navStack = this.props.navStack;
    navStack.push('Menu');
    this.props.updateNavigationStack(navStack);
    this.props.updateCurrentCategory(id).then(mains => this.props.navigation.navigate('Menu'));
  }

  render() {
    let { cart, allCategories, navigation } = this.props;
    allCategories = Object.values(allCategories);
    return (
      <View style={genericStyles.flexContainer}>
        <Banner title={"All Categories"}/>
        <ScrollablePage
          cards={allCategories}
          cardStyle="Category"
          clickHandler={this.chooseCategory.bind(this)}
        />
        {cart.totalPrice > 0 ? (
          <CartAlert cart={cart} navigation={navigation}/>
        ) : (null)}
      </View>
    )
  }
}

let mapDispatchToProps = (dispatch) => ({
  updateCurrentCategory: (id) => dispatch(actions.updateCurrentCategory(id)),
  getAllCategories: (categories) => dispatch(actions.getAllCategories(categories)),
  updateSides: () => dispatch(actions.updateSides()),
  updateNavigationStack: (stack) => dispatch(actions.updateNavigationStack(stack))
})

export default connect((store)=>{
  return {
    allCategories: store.allCategories,
    cart: store.cart,
    navStack: store.navStack,
  }
  }, mapDispatchToProps)(Home)
