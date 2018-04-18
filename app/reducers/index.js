import { combineReducers } from 'redux';
import currentCategory from './updateCurrentCategory';
import allCategories from './getAllCategories';
import currentItem from './updateCurrentItem';
import cart from './updateCart';
import sides from './updateSides';
import drinks from './updateDrinks';
import selection from './updateSelection';
import navStack from './updateNavStack';
import account from './updateAccount';

export default rootReducer = combineReducers({
  currentCategory,
  currentItem,
  cart,
  sides,
  drinks,
  selection,
  account,
  navStack,
  allCategories
})
