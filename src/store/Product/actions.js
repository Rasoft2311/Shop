import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE }  from './types.js';

export const fetchUserRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST
  };
};

export const fetchUserSuccess = products => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  };
};

export const fetchUserFailure = error => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  };
};