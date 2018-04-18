import { database } from '../firebase';
import { createItemHash } from '../helpers';

const SIDESREF = database.menuItems.child('digestData').child('sides');

// creates an object from the sides array in the database
// used for reference and instance lookup when put into store.
async function getAllSides() {
  const SIDES = await createItemHash(SIDESREF);
  return SIDES;
}


function actionCreator(sides) {
  return {
    type: 'UPDATE_SIDES',
    payload: sides
  };
}

export default updateSides = (id) => {
  return function (dispatch, getState) {
    return getAllSides().then(
      sides => dispatch(actionCreator(sides))
    );
  };
};
