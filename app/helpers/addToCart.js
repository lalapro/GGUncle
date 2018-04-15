let addToCart = (selection, cart) => {
  let totalPrice = cart.totalPrice;
  if (selection.items) {
    for (let itemId in selection.items) {
      if (cart.items[itemId] === undefined) {
        cart.items[itemId] = selection.items[itemId];
        totalPrice += selection.items[itemId].price;
      } else {
        let price = selection.items[itemId].price;
        cart.items[itemId].price += price;
        totalPrice += price;
      }
    }
  }
  cart.totalPrice = totalPrice;
  return cart;
}

export default addToCart
//
//
// addToCart(selection) {
//   let cart = this.props.cart;
//   let totalPrice = cart.totalPrice;
//
//   if (selection.items) {
//     for (let itemId in selection.items) {
//       if (cart.items[itemId] === undefined) {
//         cart.items[itemId] = selection.items[itemId];
//         totalPrice += selection.items[itemId].price;
//       } else {
//         let price = selection.items[itemId].price;
//         cart.items[itemId].price += price;
//         totalPrice += price;
//       }
//     }
//   }
//   cart.totalPrice = totalPrice;
//   this.props.updateCart(cart);
//   this.props.updateSelection({items: {}, totalPrice: 0});
//   this.props.close();
// }
