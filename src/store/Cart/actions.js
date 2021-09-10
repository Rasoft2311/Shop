import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, REMOVE_FULL_PRODUCT_FROM_CART }  from './types.js';

export const addProductToCart = product => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product
  };
};

export const removeProductFromCart = product => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: product
  };
};

export const removeFullProductFromCart = product => {
  return {
    type: REMOVE_FULL_PRODUCT_FROM_CART,
    payload: product
  };
};




