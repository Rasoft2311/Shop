import { combineReducers } from 'redux';
import { cartReducer } from './Cart/reducer';
import { productReducer } from './Product/reducer';

export const rootReducer = combineReducers ({
  cart: cartReducer,
  product: productReducer
});