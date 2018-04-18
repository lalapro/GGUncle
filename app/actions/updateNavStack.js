import { database } from '../firebase';



function actionCreator(stack) {
  return {
    type: 'UPDATE_NAVGIATION_STACK',
    payload: stack
  };
}

export default pushToStack = (stack) => {
  return function (dispatch, getState) {
    return dispatch(actionCreator(stack))
  };
};
