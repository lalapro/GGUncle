import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNavigator, createNavigationContainer, TabRouter, addNavigationHelpers } from 'react-navigation';
import LandingPage from './LandingPage';
import Home from './Home';




const LandingPageScreen = ({ navigation }) => (
  <LandingPage banner="Landing Page" navigation={navigation}/>
);


const CustomTabView = ({ router, navigation }) => {
  const { routes, index } = navigation.state;
  const ActiveScreen = router.getComponentForRouteName(routes[index].routeName);
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
  );
};

const CustomTabRouter = TabRouter(
  {
    LandingPage: {
      screen: LandingPage,
      path: 'LandingPage',
    },
    Home: {
      screen: Home,
      path: 'Home',
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
