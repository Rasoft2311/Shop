import { combineReducers } from 'redux';
import { cartReducer } from './Cart/reducer';
import { themeReducer } from './Theme/reducer';
import { productReducer } from './Product/reducer';

export const rootReducer = combineReducers ({
  theme: themeReducer,
  cart: cartReducer,
  product: productReducer
});