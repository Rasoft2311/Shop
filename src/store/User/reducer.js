import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE }  from './types.js';

const initialState = {
  user: null,
  isLoading: false,

};

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER_REQUEST :
      return {
        ...state,
        loading: true
      }
    case FETCH_USER_SUCCESS :
      return {
        user: action.payload,
        loading: true
      }
    case FETCH_USER_FAILURE :
      return {
        user: null,
        loading: false
      }
  }
  return state;
};