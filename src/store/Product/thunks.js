import { apiGetAllProducts } from '../../api/';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from './actions';

export const getAllProducts = () => (dispatch) => {
  dispatch(fetchUserRequest());
  apiGetAllProducts().then(data => {
    dispatch(fetchUserSuccess(data.products));
  }, error => {
    dispatch(fetchUserFailure(error.message));
  });
};