export default updateSides = (store = {}, action) => {
  switch(action.type) {
    case 'UPDATE_SIDES':
      return action.payload;
    default:
      return store;
  }
};
