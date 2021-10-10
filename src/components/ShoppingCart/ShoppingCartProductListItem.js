import { Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import clsx from 'clsx';
import { addProductToCartAndStorage, removeProductToCartAndStorage, removeFullProductToCartAndStorage } from '../../store/Cart/thunks';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  control: {
    padding: '0 10px'
  },
  img: {
    display: 'block',
    width: '100%',
    maxWidth: '120px',
    height: 'auto',
  },
  counterButtons: {

  },
  counterButton: {
    margin: `${theme.spacing(1)}px 0`,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '2px'
  },
  counterIcon: {
    fontSize: '1.5rem'
  },
  closeIcon: {
    fontSize: '2.1rem'
  },
  counterAmount: {
    margin: `0 ${theme.spacing(1)}px`
  },
  icon: {
    fill: theme.palette.primary.main,
  }
}));

export const ShoppingCartProductListItem = ({ product }) => {
  const classes = useStyles();
  const {image, title, amount, price, currency } = product;
  const dispatch = useDispatch();
  return (
    <Grid container alignItems="center">
      <Grid xs={4} item>
        <img className={classes.img} src={image} alt="Product"/>
      </Grid>
      <Grid xs={7} item className={classes.control}>
        <Typography variant="h4" component="h3" >{title}</Typography>
        <Grid container justifyContent="center" alignItems="center" className={classes.counterButtons}>
          <IconButton className={classes.counterButton} aria-label="remove one instance of this product" onClick={() => dispatch(removeProductToCartAndStorage(product._id))}>
            <RemoveIcon className={clsx(classes.icon, classes.counterIcon)}/>
          </IconButton>
          <Typography className={classes.counterAmount} variant="body1" component="span" >{amount}</Typography>
          <IconButton className={classes.counterButton} aria-label="add one instance of this product" onClick={() => dispatch(addProductToCartAndStorage(product))}>
            <AddIcon className={clsx(classes.icon, classes.counterIcon)}/>
          </IconButton>
        </Grid>
        <Typography variant="body1" component="p" >{price*amount}{currency}</Typography>
      </Grid>
      <Grid xs={1} container item justifyContent="flex-end">
        <IconButton aria-label="remove item from cart" onClick={() => dispatch(removeFullProductToCartAndStorage(product._id))}>
          <CancelIcon className={clsx(classes.icon,classes.closeIcon)}/>
        </IconButton>
      </Grid>
    </Grid>
  );
};