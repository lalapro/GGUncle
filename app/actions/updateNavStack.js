// ghetto version of keeping track of navigation state
// updates each time user navigates to and from a screen
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
