import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createNavigator, createNavigationContainer, TabRouter, addNavigationHelpers } from 'react-navigation';


import { LandingPage, HomeScreen, MenuScreen, ItemScreen } from '../screens';



const IMAGES = [
  ['Home', require('../assets/home.png')],
  ['Search', require('../assets/search.png')],
  ['Cart', require('../assets/cart.png')],
  ['Account', require('../assets/account.png')]
]


const CustomTabView = ({ router, navigation }) => {
  const { routes, index } = navigation.state;
  const ActiveScreen = router.getComponentForRouteName(routes[index].routeName);
  if (routes[index].routeName === 'LandingPage') {
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
    LandingPage: {
      screen: LandingPage,
      path: 'Landing',
    },
    Home: {
      screen: HomeScreen,
      path: 'Home',
    },
    Menu: {
      screen: MenuScreen,
      path: 'Menu',
    },
    Item: {
      screen: ItemScreen,
      path: 'Item'
    }
  },
  {
    initialRouteName: 'Home',
  }
);


const CustomTabs = createNavigationContainer(
  createNavigator(CustomTabRouter)(CustomTabView)
);


export default CustomTabs;



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
