let updateCart = (store = { items: {}, totalPrice: 0, totalQuantity: 0 }, action) => {
  switch(action.type) {
    case 'UPDATE_CART':
      return Object.assign({}, action.payload);
    default:
      return store;
  }
};

export default updateCart;
