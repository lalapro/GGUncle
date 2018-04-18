// function to get quantity of mains and sides

let getQuantity = (mainId, selection, sideId) => {
  let main = selection.items[mainId];
  if (sideId) {
    if (main) {
      return main.sides[sideId] ? main.sides[sideId].quantity : 0;
    }
  } else {
    return main ? main.quantity : 0;
  }
}


export default getQuantity;
