import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartProductById } from '../../store/Cart/selectors';
import { addProductToCartAndStorage, removeProductToCartAndStorage } from '../../store/Cart/thunks';
import { Paper } from '../Paper';

const useStyles = makeStyles((theme) => ({
  product: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(3),
  },
  imgWrap: {
    position: 'relative',
    margin: 0,
    paddingTop: '56.25%'
  },
  img: {
    position: 'absolute',
    left: 0,
    top: 0,
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  category: {
    marginBottom: theme.spacing(2.5),
    fontWeight: 'bold',
    color: theme.palette.third.main
  },
  title: {
    marginTop: theme.spacing(1.2),
    marginBottom: theme.spacing(.75),
    color: theme.palette.primary.main
  },
  description: {
    marginBottom: theme.spacing(2.5),
    color: theme.palette.secondary.light
  },
  icon: {
    fill: theme.palette.primary.main
  },
  control: {
    marginTop: 'auto'
  },
  amount: {
    margin: '0 10px'
  }
}));

export const ProductListItem = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {image, category, title, descriprion, price, currency } = product;
  const cartProduct = useSelector(state => selectCartProductById(state, product._id));

  return (
    <Paper className={classes.product}>
      <figure className={classes.imgWrap}>
        <img className={classes.img} src={image} alt="product"/>
      </figure>
      <Typography className={classes.title} align="center" variant="h2">{title}</Typography>
      <Typography className={classes.category} align="center" variant="body1">{category}</Typography>
      <Typography className={classes.description} variant="h4" component="p">
        {descriprion}
      </Typography>
      <Grid className={classes.control} container justifyContent="space-between" alignItems="center" wrap='nowrap'>
        {
          cartProduct 
          ? 
          <Grid alignItems='center' container>
            <Button variant="contained" color="primary" onClick={() => dispatch(removeProductToCartAndStorage(product._id))}>-</Button>
            <Typography variant="h3" className={classes.amount}>{cartProduct.amount}</Typography>
            <Button variant="contained" color="primary" onClick={() => dispatch(addProductToCartAndStorage(product))}>+</Button>
          </Grid>
          :
          <Button variant="contained" color="primary" onClick={() => {
            dispatch(addProductToCartAndStorage(product));
          }}>Add to cart</Button>
        }
        
        <div className={classes.likeButton} aria-label="add product to favourite">
          <Typography display='inline' variant="h3">{price*(cartProduct ? cartProduct.amount : 1)}</Typography>
          <Typography display='inline' variant="h3">{currency}</Typography>
        </div>
      </Grid>
    </Paper>
  );
};