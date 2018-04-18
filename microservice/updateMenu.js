// function should run every 10 minutes to update firebase database

import { database } from '../app/firebase';


export default updateMenu = () => {
  fetch("https://s3.amazonaws.com/staginggooduncledigests/products_istcki0x000h28d97a9rv9jp.json")
  .then(response => response.json())
  .then(data => {
    let categories = data.digestData.categories;
    // for each category...
    categories.forEach(cat => {
      let mains = data.digestData.mains;
      // loop through each main and see if category exists
      for (let i = 0; i < mains.length; i++) {
        // assume only one category per main, but can change
        if (mains[i].categories[0] === cat.id) {
          // if it exists, add the main into an array
          cat['mains'] ? cat['mains'].push(mains[i]) : cat['mains'] = [mains[i]]
        }
      }
    })
    // get rid of all other categories that don't have mains
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].mains === undefined) {
        categories.splice(i, 1);
        i--;
      }
    }
    database.menuItems.set(data);
  })
}
