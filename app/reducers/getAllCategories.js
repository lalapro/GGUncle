let getAllCategories = (store = {}, action) => {
  switch(action.type) {
    case 'ALL_CATEGORIES':
      return action.payload
    default:
      return store;
  }
};

export default getAllCategories;
