// updates account information in the following format:
// {
//   phone: phone_number,
//   loggedIn: true
// }
// will be used to add purchase history if there is time..

function actionCreator(account) {
  return {
    type: 'UPDATE_ACCOUNT',
    payload: account
  };
}

export default updateAccount = (account) => {
  return function (dispatch, getState) {
    return dispatch(actionCreator(account))
  };
};
