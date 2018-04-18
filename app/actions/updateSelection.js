function actionCreator(selection) {
  return {
    type: 'UPDATE_SELECTION',
    payload: selection
  };
}

export default updateCurrentItem = (selection) => {
  return function (dispatch, getState) {
    return dispatch(actionCreator(selection))
  };
};
