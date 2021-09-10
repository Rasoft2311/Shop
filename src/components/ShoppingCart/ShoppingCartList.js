import { List, ListItem, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { ProductCart } from '../Product';
import { addProductToCart, removeProductFromCart, removeFullProductFromCart } from '../../store/Cart/actions';

const useStyles = makeStyles((theme) => ({
  shoppingCartList: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
    },
  },
  item: {
    width: '100%',
    marginBottom: '10px',
    color: theme.palette.primary.main,
    textAlign: 'center',
    '&:last-child': {
      marginBottom: 0,
    }
  },
}));

const ShoppingCartList = ({products, addProductToCart, removeProductFromCart, removeFullProductFromCart}) => {
  const classes = useStyles();
  return (
    <List className={classes.shoppingCartList} disablePadding>
      {products.map((product) => (
        <ListItem key={product._id} className={classes.item} disableGutters>
          <ProductCart product={product} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} removeFullProductFromCart={removeFullProductFromCart}/>
        </ListItem>
      ))}
    </List>
  );
};
const mapStateToProps = (state) => ({ products: state.cart.products });

const mapDispatchToProps  = {
  addProductToCart,
  removeProductFromCart,
  removeFullProductFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartList);