let updateAccount = (store = {}, action) => {
  switch(action.type) {
    case 'UPDATE_ACCOUNT':
      return action.payload;
    default:
      return store;
  }
};

export default updateAccount;
