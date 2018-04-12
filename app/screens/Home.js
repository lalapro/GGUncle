import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { database } from '../firebase';
import { connect } from 'react-redux';
import actions from '../actions';
import fakeData from './fakeData';

import Card from '../components/Card';



const MAINS = database.menuItems.child('digestData').child('mains');
// const CATEGORIES = database.menuItems.child('digestData').child('categories');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: fakeData
    }
  }

  componentDidMount() {
    this.props.updateCategories('test');
  }

  goBack() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <Text>
            Search
          </Text>
        </View>
        <View style={{flex: 0.5, backgroundColor: 'red', position: 'relative',width: "100%"}}>
          <Text>
            Categories
          </Text>
        </View>
        <View style={styles.content}>
          <ScrollView
            style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
            contentContainerStyle={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: "100%"}}
          >
            <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
              {this.state.categories.map((cat, i) => {
                if (cat.mains) {
                  return ( <Card key={cat.name} category={cat}/> )
                }
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateMenu: (menu) => dispatch(actions.menuUpdate(menu)),
  updateCategories: (categories) => dispatch(actions.getAllCategories(categories))
})

export default connect((store)=>{
  console.log(store)
  return {}
  }, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    flex: 2,
    backgroundColor: 'lightgreen',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: "100%"
  },
  content: {
    flex: 8,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: "100%"
  }
});
