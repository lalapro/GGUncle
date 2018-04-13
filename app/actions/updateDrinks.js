import { database } from '../firebase';
import { createItemHash } from '../helpers';

const DRINKSREF = database.menuItems.child('digestData').child('drinks');


async function getAllDrinks() {
  let DRINKS = await createItemHash(DRINKSREF);
  return DRINKS;
}


function actionCreator(drinks) {
  return {
    type: 'UPDATE_DRINKS',
    payload: drinks
  };
}

export default updateDrinks = () => {
  return function (dispatch, getState) {
    return getAllDrinks().then(
      drinks => dispatch(actionCreator(drinks))
    );
  };
};
