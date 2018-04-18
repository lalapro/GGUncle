let editCart = (cart, mainId, method, sideId) => {
  let totalPrice = cart.totalPrice;
  let totalQuantity = cart.totalQuantity;
  if (sideId) {
    let side = cart.items[mainId].sides[sideId];
    let quantity = side.quantity;
    let price = side.price;
    if (quantity > 0 && method === 'Remove') {
      side.quantity--;
      totalPrice -= price;
      totalQuantity--;
    } else if (method === 'Add') {
      side.quantity++;
      totalPrice += price;
      totalQuantity++;
    }
  } else {
    let main = cart.items[mainId];
    let price = cart.items[mainId].price;
    if (method === 'Add') {
      main.quantity++;
      totalPrice += price;
      totalQuantity++;
    } else if (method === 'Remove') {
      main.quantity--;
      totalPrice -= price;
      totalQuantity--;
    }
  }
  cart.totalPrice = totalPrice;
  cart.totalQuantity = totalQuantity;
  return cart
}

export default editCart;
