import { addProductToCart, removeProductFromCart, removeFullProductFromCart } from './actions';

export const addProductToCartAndStorage = (product) => (dispatch, getState) => {
  dispatch(addProductToCart(product));
  localStorage.setItem('cart', JSON.stringify(getState().cart));
};

export const removeProductToCartAndStorage = (id) => (dispatch, getState) => {
  dispatch(removeProductFromCart(id));
  localStorage.setItem('cart', JSON.stringify(getState().cart));
};

export const removeFullProductToCartAndStorage = (id) => (dispatch, getState) => {
  dispatch(removeFullProductFromCart(id));
  localStorage.setItem('cart', JSON.stringify(getState().cart));
};