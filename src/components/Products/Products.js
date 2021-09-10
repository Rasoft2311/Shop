import { Grid } from '@material-ui/core';
import { Product } from '../Product';
import {connect} from 'react-redux';
import { getAllProducts } from '../../store/Product/actions';
import { addProductToCart, removeProductFromCart } from '../../store/Cart/actions';
import { useEffect } from 'react';

const Products = ({products, getAllProducts, addProductToCart, cartProducts, removeProductFromCart}) => {
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);
  return (
    <Grid spacing={3} component="ul" container alignItems="center">
        {products.map((product) => (
          <Grid key={product._id} component="li" item xs={12} sm={6} lg={4}>
            <Product product={product} addProductToCart={addProductToCart} cartProducts={cartProducts} removeProductFromCart={removeProductFromCart}/>
          </Grid>
        ))}
    </Grid>
  );
};

const mapStateToProps = (state) => ({ products: state.product.products, cartProducts: state.cart.products });

const mapDispatchToProps  = {
  getAllProducts,
  addProductToCart,
  removeProductFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);