import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, REMOVE_FULL_PRODUCT_FROM_CART }  from './types.js';

const initialState = JSON.parse(localStorage.getItem('cart')) || {
  products: [],
  price: 0
};

export const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT_TO_CART : {
      let products;
      const productIndex = state.products.findIndex(el => el._id === action.payload._id);
      if(productIndex !== -1) {
        let product = state.products[productIndex];
        product = {...product, amount: product.amount + 1};
        products = [...state.products.slice(0, productIndex), product, ...state.products.slice(productIndex + 1)];
      } else {
        products = [...state.products, {...action.payload, amount: 1}];
      }
      return {
        products: products,
        price: state.price + action.payload.price
      };
    }
    case REMOVE_PRODUCT_FROM_CART : {
      let products;
      const productIndex = state.products.findIndex(el => el._id === action.payload);
      let product = state.products[productIndex];
      if(product.amount === 1) {
        products = [...state.products.slice(0, productIndex), ...state.products.slice(productIndex + 1)];
      } else {
        product = {...product, amount: product.amount - 1};
        products = [...state.products.slice(0, productIndex), product, ...state.products.slice(productIndex + 1)];
      }
      return {
        products: products,
        price: state.price - action.payload.price
      };
    }
    case REMOVE_FULL_PRODUCT_FROM_CART : {
      let products;
      const productIndex = state.products.findIndex(el => el._id === action.payload);
      let product = state.products[productIndex];
      products = [...state.products.slice(0, productIndex), ...state.products.slice(productIndex + 1)];
      return {
        products: products,
        price: state.price - action.payload.price*product.amount
      };
    }
    default:
      return state;
  }
};