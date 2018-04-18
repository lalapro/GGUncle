let updateSelection = (store = { items: {}, totalPrice: 0}, action) => {
  switch(action.type) {
    case 'UPDATE_SELECTION':
      return Object.assign({}, action.payload);
    default:
      return store;
  }
};

export default updateSelection;
