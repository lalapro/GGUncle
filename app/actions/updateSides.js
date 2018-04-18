import { database } from '../firebase';
import { createItemHash } from '../components';

const SIDESREF = database.menuItems.child('digestData').child('sides');


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
