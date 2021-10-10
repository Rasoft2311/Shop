import { IconButton, makeStyles } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { ShoppingCart } from '../ShoppingCart';
import { ModalMenu } from '../Modal';
import { useSelector } from 'react-redux';
import { useToggle } from '../../hooks/useToggle';
import { selectAllCartProducts } from '../../store/Cart/selectors';

const useStyles = makeStyles((theme) => ({
  button: {
    '&:hover': {
      opacity: 0.9
    }
  },
  cartIcon: {
    display: 'block',
    fill: theme.palette.secondary.main,
    fontSize: '2.1rem'
  },
  cartAmount: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    fontSize: '.53rem',
    backgroundColor: theme.palette.third.main,
    color: theme.palette.secondary.main,
  }
}));

export const HeaderCart = () => {
  const classes = useStyles();
  const cartProducts = useSelector(selectAllCartProducts);
  const [isOpened, toggleIsOpened] = useToggle(false);
  return (
    <>
      <IconButton className={classes.button} onClick={toggleIsOpened} aria-label="open shopping cart">
        <ShoppingCartIcon className={classes.cartIcon}/>
        <span className={classes.cartAmount}>
          {cartProducts.length}
        </span>
      </IconButton>
      <ModalMenu menuWidth='400' isMenuOpened={isOpened} onMenuToggle={toggleIsOpened} title="Cart">
        <ShoppingCart />
      </ModalMenu>
    </>
  );
}; 