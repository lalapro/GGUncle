import axios from 'axios';
import { database } from '../app/firebase';


export default updateMenu = () => {
  axios.get("https://s3.amazonaws.com/staginggooduncledigests/products_istcki0x000h28d97a9rv9jp.json")
  .then((res) => {
    database.menuItems.set(res.data)

    // res.data.digestData.categories.forEach(cat => {
    //   for (let i = 0; i < res.data.digestData.mains.length; i++) {
    //     if (res.data.digestData.mains[i].categories[0] === cat.id) {
    //       console.log('found')
    //       cat['mains'] ? cat['mains'].push(res.data.digestData.mains[i]) : cat['mains'] = [res.data.digestData.mains[i]]
    //     }
    //   }
    //
    // })
    // database.test.set(res.data)
  })
}
