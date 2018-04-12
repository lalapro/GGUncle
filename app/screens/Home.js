import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { database } from '../firebase';
import { connect } from 'react-redux';
import actions from '../actions';
import fakeData from './fakeData';

import Card from '../components/Card';



const MAINSREF = database.menuItems.child('digestData').child('mains');
// const CATEGORIES = database.menuItems.child('digestData').child('categories');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: fakeData
    }
  }

  componentDidMount() {
    this.props.getAllCategories();
  }

  chooseCategory(id) {
    this.props.updateCurrentCategory(id);

  }

  goBack() {
    this.props.navigation.goBack();
  }

  render() {
    let categories = this.props.allCategories ? Object.values(this.props.allCategories) : [];
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
              {categories.map((cat, i) => (
                <Card
                  category={cat}
                  chooseCategory={this.chooseCategory.bind(this)}
                  key={cat.name}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCurrentCategory: (id) => dispatch(actions.updateCurrentCategory(id)),
  getAllCategories: (categories) => dispatch(actions.getAllCategories(categories))
})

export default connect((store)=>{
  return {
    allCategories: store.allCategories.categories
  }
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
