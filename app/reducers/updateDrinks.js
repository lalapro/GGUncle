export default updateDrinks = (store = {}, action) => {
  switch(action.type) {
    case 'UPDATE_DRINKS':
      return action.payload;
    default:
      return store;
  }
};
