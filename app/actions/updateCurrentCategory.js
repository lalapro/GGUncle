import { database } from '../firebase';

const CATSREF = database.menuItems.child('digestData').child('categories')

// updates currentCategory in store,
// is triggered every time a new category is clicked
async function getRelatedMains(id) {
  const CURRENTCATEGORY = {};
  let mains = [];
  let categories = await CATSREF.once('value', snap => {
    if (snap.val()) {
      let allCategories = snap.val();
      for (let i = 0; i < allCategories.length; i++) {
        let category = allCategories[i];
        if (category.id === id) {
          CURRENTCATEGORY["id"] = category.id;
          CURRENTCATEGORY["name"] = category.name;
          CURRENTCATEGORY["mains"] = category.mains;
          break;
        }
      }
    }
  });

  return CURRENTCATEGORY;
}


function actionCreator(currentCategory) {
  return {
    type: 'UPDATE_CURRENT_CATEGORY',
    payload: currentCategory
  };
}

export default updateCurrentCategory = (id) => {
  return function (dispatch, getState) {
    return getRelatedMains(id).then(
      currentCategory => dispatch(actionCreator(currentCategory))
    );
  };
};
