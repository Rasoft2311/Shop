import { combineReducers } from 'redux';
import { themeReducer } from './Theme/reducer';

export const rootReducer = combineReducers ({
  theme: themeReducer
});