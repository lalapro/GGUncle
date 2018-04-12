import { database } from '../firebase';

export default menuUpdate = (menu) => {
  let action = {
    type: 'MENU_UPDATE',
    payload: menu
  }
  return action
};
