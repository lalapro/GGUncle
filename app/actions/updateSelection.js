// updates what is currently selected in ITEM pages
// keeps track of mains and sides
// is updated when user selects a new category, or adds quantity
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
