import { database } from '../firebase';



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
