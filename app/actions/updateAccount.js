import { database } from '../firebase';



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
