import { apiGetAllProducts } from '../../api/';
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE }  from './types.js';

export const getAllProducts = () => (dispatch) =>{
  dispatch(fetchUserRequest());
  apiGetAllProducts().then(data => {
    dispatch(fetchUserSuccess(data.products));
  }, error => {
    dispatch(fetchUserFailure(error.message));
  });
};

const fetchUserRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST
  };
};

const fetchUserSuccess = products => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  };
};

const fetchUserFailure = error => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  };
};