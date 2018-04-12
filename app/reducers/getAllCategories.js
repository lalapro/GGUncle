export default getAllCategories = (state = {}, action) => {
  switch(action.type) {
    case 'ALL_CATEGORIES':
      return action
    default:
      return state;
  }
};
