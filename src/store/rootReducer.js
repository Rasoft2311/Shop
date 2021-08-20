import { combineReducers } from 'redux';
import { cartReducer } from './Cart/reducer';
import { themeReducer } from './Theme/reducer';
import { userReducer } from './User/reducer';

export const rootReducer = combineReducers ({
  theme: themeReducer,
  cart: cartReducer,
  user: userReducer
});