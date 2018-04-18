import { database } from '../firebase';

const CATSREF = database.menuItems.child('digestData').child('categories');

// creates an object with each category as an ID, used to render all categories in HOME screen
async function filterCategories() {
  const CATEGORIES = {};
  let categories = await CATSREF.once('value', snap => {
    let data = snap.val();
    data.forEach(cat => {
      CATEGORIES[cat.id] ? null : CATEGORIES[cat.id] = {'id': cat.id, 'name': cat.name}
    });
  });
  return CATEGORIES
}


function actionCreator(categories) {
  return {
    type: 'ALL_CATEGORIES',
    payload: categories
  };
}

export default getAllCategories = () => {
  return function (dispatch, getState) {
    return filterCategories().then(
      categories => dispatch(actionCreator(categories))
    );
  };
};
