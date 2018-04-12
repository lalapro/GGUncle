import { database } from '../app/firebase';


export default updateMenu = () => {
  fetch("https://s3.amazonaws.com/staginggooduncledigests/products_istcki0x000h28d97a9rv9jp.json")
  .then(response => response.json())
  .then(data => {
    let categories = data.digestData.categories;
    categories.forEach(cat => {
      let mains = data.digestData.mains;
      for (let i = 0; i < mains.length; i++) {
        if (mains[i].categories[0] === cat.id) { // assume only one category per main, but can change
          cat['mains'] ? cat['mains'].push(mains[i]) : cat['mains'] = [mains[i]]
        }
      }
    })
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].mains === undefined) {
        categories.splice(i, 1);
        i--;
      }
    }
    database.menuItems.set(data);
  })
}
