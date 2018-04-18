let modifySelection = (itemId, itemObj, method, selection, sideId) => {
  let main = selection.items[itemId];
  if (method === 'Add') {
    if (main === undefined) {
      selection.items[itemId] = itemObj;
      selection.totalPrice += itemObj.price;
      selection.items[itemId].sides = {};
    } else {
      let price = main.price;
      if (sideId) {
        if (main.sides[sideId]) {
          main.sides[sideId].quantity++;
        } else {
          main.sides[sideId] = itemObj;
        }
        selection.totalPrice += main.sides[sideId].price;
      } else {
        main.quantity++;
        selection.totalPrice += price;
      }
    }
  } else if (method === 'Remove') {
    if (main) {
      if (sideId) {
        if (main.sides[sideId]) {
          let sidePrice = main.sides[sideId].price;
          main.sides[sideId].quantity--;
          if (main.sides[sideId].quantity === 0) {
            delete main.sides[sideId];
          }
          selection.totalPrice -= sidePrice;
        }
      } else {
        if (main.quantity >= 1) {
          let price = main.price;
          main.quantity--;
          if (main.quantity === 0) {
            delete selection.items[itemId];
          }
          selection.totalPrice -= price;
        }
      }
    }
  }
  // console.log(selection)
  return selection;
}

export default modifySelection;
