// updates currently selected item,
// should include all JSON data of said item
function actionCreator(item) {
  return {
    type: 'UPDATE_CURRENT_ITEM',
    payload: item
  };
}

export default updateCurrentItem = (item) => {
  return function (dispatch, getState) {
    return dispatch(actionCreator(item))
  };
};
