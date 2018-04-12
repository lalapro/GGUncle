import { database } from '../firebase';

const MAINSREF = database.menuItems.child('digestData').child('mains');
const CATSREF = database.menuItems.child('digestData').child('categories')


async function getRelatedMains(id) {
  let mains = [];
  let categories = await CATSREF.once('value', snap => {
    if (snap.val()) {
      let allCategories = snap.val();
      for (let i = 0; i < allCategories.length; i++) {
        let category = allCategories[i];
        if (category.id === id) {
          mains = category.mains;
          break;
        }
      }
    }
  });
  return mains;
}


function actionCreator(mains) {
  return {
    type: 'UPDATE_CURRENT_CATEGORY',
    mains
  };
}

export default updateCurrentCategory = (id) => {
  return function (dispatch, getState) {
    return getRelatedMains(id).then(
      mains => dispatch(actionCreator(mains))
    );
  };
};
