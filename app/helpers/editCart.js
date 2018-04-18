// this function takes snapshot of old cart and makes changes to its values
// based on the method and items
// used for editting items in cart screen

let editCart = (cart, mainId, method, sideId) => {
  let totalPrice = cart.totalPrice;
  let totalQuantity = cart.totalQuantity;
  // if sideId exists, that means we only need to update sides
  if (sideId) {
    // locate the side selected
    let side = cart.items[mainId].sides[sideId];
    let quantity = side.quantity;
    let price = side.price;
    // update information as necessary
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
    // if sideId !== exist, we concern ourselves with mains only
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
