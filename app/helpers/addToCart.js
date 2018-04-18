let addToCart = (selection, cart) => {
  let totalPrice = cart.totalPrice;
  let totalQuantity = cart.totalQuantity;

  if (selection.items) {
    for (let itemId in selection.items) {
      let item = selection.items[itemId];
      if (cart.items[itemId] === undefined) {
        cart.items[itemId] = item;
        totalPrice += item.price * item.quantity;
        totalQuantity += item.quantity;

        for (let sideId in item.sides) {
          let sidePrice = item.sides[sideId].price;
          let sideQuantity = item.sides[sideId].quantity;
          totalQuantity += sideQuantity;
          totalPrice += sidePrice * sideQuantity;
        }

      } else {
        let price = item.price;
        let cartItem = cart.items[itemId];
        cartItem.quantity++;
        totalPrice += price;
        totalQuantity++;

        for (let sideId in item.sides) {
          if (cartItem.sides[sideId]) {
            cartItem.sides[sideId].quantity++;
          } else {
            cartItem.sides[sideId] = item.sides[sideId]
          }
          totalPrice += item.sides[sideId].price;
          totalQuantity++;
        }

      }
    }
  }
  cart.totalPrice = totalPrice;
  cart.totalQuantity = totalQuantity;
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
