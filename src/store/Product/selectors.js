import { createSelector } from '@reduxjs/toolkit';

export function selectAllProducts(state) {
  return state.product.products;
};

export function selectIsProductLoading(state) {
  return state.product.isLoading;
};

export function selectProductsError(state) {
  return state.product.error;
};

export const selectfilteredProductsByCategory = createSelector([selectAllProducts, (state, categoryName) => categoryName], (products, categoryName) => {
  if(categoryName) return products.filter(product => product.category === categoryName);
  return products;
});