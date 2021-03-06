// this is a custom navigator/router, allows all screens to share navigation commands and props
// though props are not needed b/c of redux
// mainly helps with a prettier navigation tab ...


import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createNavigator, createNavigationContainer, TabRouter, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import actions from '../actions';
import { LandingPage, HomeScreen, MenuScreen, CartScreen, AccountScreen } from '../containers';
import SignUpNavigator from './SignUpNavigator';



let IMAGES = [
  ['Home', require('../assets/home.png')],
  ['Home', require('../assets/search.png')],
  ['Cart', require('../assets/cart.png')],
  ['Account', require('../assets/account.png')]
]


let CustomTabView = ({ router, navigation }) => {
  let { routes, index } = navigation.state;
  let ActiveScreen = router.getComponentForRouteName(routes[index].routeName);
  if (routes[index].routeName === 'LandingPage') {
    // don't render navigation tab for LandingPage
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
            <TouchableOpacity
              key={i}
              style={{height:'100%'}}
              onPress={() => {navigation.navigate(img[0])}}
            >
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

let CustomTabRouter = TabRouter(
  {
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
    },
    Account: {
      screen: AccountScreen,
      path: 'Account'
    }
  },
  {
    initialRouteName: 'LandingPage',
  }
);


let CustomTabs = createNavigationContainer(
  createNavigator(CustomTabRouter)(CustomTabView)
);

export default CustomTabs



let styles = StyleSheet.create({
  tabNavigator: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    position: 'relative',
    width: "100%",
    borderTopColor: 'grey',
    borderTopWidth: 1,
  },
  icons: {
    top: 15,
    width: 28,
    height: 28
  }
});
