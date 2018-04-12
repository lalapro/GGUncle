export default menuUpdate = (menu = {}, action) => {
  switch(action.type) {
    case 'MENU_UPDATE':
      return action.payload;
    default:
      return menu;
  }
};
