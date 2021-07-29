import { makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import { ShoppingCartListContainer } from '../List/ShoppingCartListContainer';
import { OrderSummary } from '../OrderSummary';

const useStyles = makeStyles((theme) => ({
  list: {
    height: 'calc(100% - 150px)',
    overflow: 'auto',
  },
  orderSummary: {
    height: '150px',
    borderTop: `1px solid ${theme.palette.borderLine[theme.palette.type]}`,
  }
}));

export const ShoppingCart = () => {
  const classes = useStyles();
  
  return (
    <>
      <div className={classes.list}>
        <ShoppingCartListContainer />
      </div>
      <div className={classes.orderSummary}>
        <OrderSummary/>
      </div>
    </>
  );
};

// ModalMenu.propTypes = {
//   children: PropTypes.node.isRequired,
//   scrollableElRef: PropTypes.oneOfType([
//     PropTypes.func, 
//     PropTypes.shape({ current: PropTypes.instanceOf(Element) })
//   ]),
//   title: PropTypes.string.isRequired
// };