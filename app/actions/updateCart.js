// updates cart in the following format:
// {
//   items: {
//     itemId: {
//       id: string,
//       names: string,
//       price: int,
//       quantity: int,
//       sides: {
//         id: {
//           string,
//           name: string,
//           price: int,
//           quantity: int
//        },
//        id2:....
//     },
//    itemId2:....
//   },
//   totalPrice: int,
//   totalQuantity: int
// }
function actionCreator(cart) {
  return {
    type: 'UPDATE_CART',
    payload: cart
  };
}

export default updateCart = (cart) => {
  return function (dispatch, getState) {
    return dispatch(actionCreator(cart))
  };
};
