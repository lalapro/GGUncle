import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createNavigator, createNavigationContainer, TabRouter, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import actions from '../actions';


import { LoadingPage, LandingPage, HomeScreen, MenuScreen, CartScreen } from '../containers';
import SignUpNavigator from './SignUpNavigator';



const IMAGES = [
  ['Home', require('../assets/home.png')],
  ['Search', require('../assets/search.png')],
  ['Cart', require('../assets/cart.png')],
  ['Account', require('../assets/account.png')]
]


const CustomTabView = ({ router, navigation }) => {
  const { routes, index } = navigation.state;
  const ActiveScreen = router.getComponentForRouteName(routes[index].routeName);
  if (routes[index].routeName === 'LandingPage' || routes[index].routeName === 'LoadingPage') {
    return (
      <View style={{flex: 1}}>
        <ActiveScreen
          navigation={addNavigationHelpers({
            dispatch: navigation.dispatch,
            state: routes[index],
          })}
          screenProps={{}}
        />
      </View>
    )
  } else {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 10}}>
          <ActiveScreen
            navigation={addNavigationHelpers({
              dispatch: navigation.dispatch,
              state: routes[index],
            })}
            screenProps={{}}
          />
        </View>
        <View style={styles.tabNavigator}>
          {IMAGES.map((img, i) => (
            <TouchableOpacity onPress={() => {navigation.navigate(img[0])}} key={i}>
              <Image
                source={img[1]}
                resizeMode="contain"
                style={styles.icons}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    )
  }
};

const CustomTabRouter = TabRouter(
  {
    LoadingPage: {
      screen: LoadingPage,
      path: 'LoadingPage'
    },
    LandingPage: {
      screen: LandingPage,
      path: 'LandingPage',
    },
    Home: {
      screen: HomeScreen,
      path: 'Home',
    },
    Menu: {
      screen: MenuScreen,
      path: 'Menu',
    },
    Cart: {
      screen: CartScreen,
      path: 'Cart'
    }
  },
  {
    initialRouteName: 'LandingPage',
  }
);


const CustomTabs = createNavigationContainer(
  createNavigator(CustomTabRouter)(CustomTabView)
);


const mapDispatchToProps = (dispatch) => ({
  updateCurrentItem: (item) => dispatch(actions.updateCurrentItem(item)),
  updateSelection: (selection) => dispatch(actions.updateSelection(selection)),
})

export default connect((store) => {
  return {
    cart: store.cart
  }
}, mapDispatchToProps)(CustomTabs)




const styles = StyleSheet.create({
  tabNavigator: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    position: 'relative',
    width: "100%",
    borderTopColor: 'grey',
    borderTopWidth: 1
  },
  icons: {
    top: 15,
    width: 28,
    height: 28
  }
});
