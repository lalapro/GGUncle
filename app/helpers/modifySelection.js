let modifySelection = (itemId, itemObj, method, selection) => {
  if (method === 'Add') {
    if (selection.items[itemId] === undefined) {
      itemObj['quantity'] = 1;
      selection.items[itemId] = itemObj;
      selection.totalPrice += itemObj.price;
    } else {
      let price = selection.items[itemId].price;
      selection.items[itemId].quantity++;
      // selection.items[itemId].price += price;
      selection.totalPrice += price;
    }
  } else if (method === 'Remove') {
    let item = selection.items[itemId];
    if (item) {
      if (item.quantity >= 1) {
        let price = item.price;
        item.quantity--;
        if (item.quantity === 0) {
          delete selection.items[itemId];
        }
        selection.totalPrice -= price;
      }
    }
  }
  return selection;
}

export default modifySelection;
