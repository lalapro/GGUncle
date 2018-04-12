import { database } from '../firebase';

const MAINSREF = database.menuItems.child('digestData').child('mains');
const CATSREF = database.menuItems.child('digestData').child('categories')


function filterCategories() {
  return MAINSREF.once('value', snap => {
    let mains = snap.val(); // all available mains
    if (mains) {
      CATSREF.once('value', snap => {
        let categories = snap.val(); // all available categories
        if (categories) {
          categories.forEach(cat => {
            for (let i = 0; i < mains.length; i++) {
              for (let j = 0; j < mains[j].categories.length; j++) {
                
              }
              if (mains[i].categories[0] === cat.id) {
                cat['mains'] ? cat['mains'].push(mains[i]) : cat['mains'] = [mains[i]]
              }
            }
          })
        }
      })
    }
  })
}


function makeASandwich(categories) {
  return {
    type: 'ALL_CATEGORIES',
    forPerson,
    secretSauce
  };
}


export default getAllCategories = () => {
  return function (dispatch, getState) {
    return filterCategories().then(
      categories => dispatch(makeASandwich(categories))
    );
  };
};
