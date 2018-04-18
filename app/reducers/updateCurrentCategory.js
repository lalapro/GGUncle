let updateCurrentCategory = (store = {}, action) => {
  switch(action.type) {
    case 'UPDATE_CURRENT_CATEGORY':
      return action.payload;
    default:
      return store;
  }
};

export default updateCurrentCategory;
