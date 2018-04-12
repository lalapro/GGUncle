export default getAllCategories = (store = {}, action) => {
  switch(action.type) {
    case 'ALL_CATEGORIES':
      return action
    default:
      return store;
  }
};
