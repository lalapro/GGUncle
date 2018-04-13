import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { database } from '../firebase';
import { connect } from 'react-redux';
import actions from '../actions';
import fakeData from './fakeData';


import { Banner, CategoryCard, ScrollableContent } from '../components';



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    this.props.getAllCategories().then(res => {
      let categories = Object.values(this.props.allCategories)
      this.setState({categories})
    });
  }

  chooseCategory(id, category) {
    this.props.updateSides();
    this.props.updateDrinks();
    this.props.updateCurrentCategory(id)
    .then(mains => this.props.navigation.navigate('Menu'));

  }

  goBack() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <Banner title={"All Categories"}/>
        <ScrollableContent
          cards={this.state.categories}
          cardStyle="Category"
          clickHandler={this.chooseCategory.bind(this)}
        />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCurrentCategory: (id) => dispatch(actions.updateCurrentCategory(id)),
  getAllCategories: (categories) => dispatch(actions.getAllCategories(categories)),
  updateSides: () => dispatch(actions.updateSides()),
  updateDrinks: () => dispatch(actions.updateDrinks())
})

export default connect((store)=>{
  return {
    allCategories: store.allCategories
  }
  }, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    backgroundColor: 'black'
  }
});
