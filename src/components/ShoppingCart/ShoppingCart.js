import { makeStyles } from '@material-ui/core';
import { default as ShoppingCartList } from './ShoppingCartList';
import { OrderSummary } from '../OrderSummary';

const useStyles = makeStyles((theme) => ({
  list: {
    height: 'calc(100% - 150px)',
    overflow: 'auto',
  },
  orderSummary: {
    height: '150px',
    borderTop: `1px solid ${theme.palette.borderLine.main}`,
  }
}));

export const ShoppingCart = () => {
  const classes = useStyles();
  
  return (
    <>
      <div className={classes.list}>
        <ShoppingCartList />
      </div>
      <div className={classes.orderSummary}>
        <OrderSummary/>
      </div>
    </>
  );
};