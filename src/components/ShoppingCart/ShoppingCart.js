import { makeStyles, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectAllCartProducts } from '../../store/Cart/selectors';
import { ShoppingCartProductList } from './ShoppingCartProductList';
import { ShoppingCartSum } from './ShoppingCartSum';

const useStyles = makeStyles((theme) => ({
  list: {
    height: 'calc(100% - 150px)',
    overflow: 'auto',
  },
  orderSummary: {
    height: '150px',
    borderTop: `1px solid ${theme.palette.borderLine.main}`,
  },
  notFound: {
    marginTop: theme.spacing(4),
    textAlign: 'center'
  }
}));

export const ShoppingCart = () => {
  const classes = useStyles();
  const products = useSelector(selectAllCartProducts);
  return (
    <>
      <div className={classes.list}>
        {
          products.length 
          ?
          <ShoppingCartProductList products={products} />
          :
          <Typography className={classes.notFound} variant="h2" component="p">No products in cart yet.</Typography>
        }
      </div>
      <div className={classes.orderSummary}>
        <ShoppingCartSum />
      </div>
    </>
  );
};