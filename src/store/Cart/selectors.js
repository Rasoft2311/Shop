export function selectAllCartProducts(state) {
  return state.cart.products;
};

export function selectCartProductById(state, id) {
  return state.cart.products.find(el => el._id === id);
};

export function selectCartPrice(state) {
  return state.cart.price;
};