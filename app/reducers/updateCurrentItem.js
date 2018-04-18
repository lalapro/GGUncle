let updateCurrentItem = (store = {}, action) => {
  switch(action.type) {
    case 'UPDATE_CURRENT_ITEM':
      return action.payload;
    default:
      return store;
  }
};

export default updateCurrentItem;
