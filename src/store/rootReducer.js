import { combineReducers } from 'redux';
import { cartReducer } from './Cart/reducer';
import { themeReducer } from './Theme/reducer';

export const rootReducer = combineReducers ({
  theme: themeReducer,
  cart: cartReducer,
});