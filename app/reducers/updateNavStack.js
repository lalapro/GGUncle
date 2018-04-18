let updateNavStack = (store = [], action) => {
  switch(action.type) {
    case 'UPDATE_NAVGIATION_STACK':
      return action.payload;
    default:
      return store;
  }
};

export default updateNavStack;
