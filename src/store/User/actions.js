import { getUser } from '../../api/userApi.js';
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE }  from './types.js';

export const getUserInfo = () => (dispatch) =>{
  dispatch(fetchUserRequest());
  getUser().then(user => {
    dispatch(fetchUserSuccess(user));
  }, error => {
    dispatch(fetchUserFailure(error));
  });
};

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

const fetchUserSuccess = user => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user
  }
}

const fetchUserFailure = error => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  }
}