import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { Paper } from '../Paper';

const useStyles = makeStyles((theme) => ({
  product: {
    padding: '30px',
  },
  img: {
    display: 'block',
    width: '100%',
    objectFit: 'cover'
  },
  category: {
    marginTop: theme.spacing(1.2),
    marginBottom: theme.spacing(1.2),
    color: theme.palette.third.main
  },
  title: {
    marginBottom: theme.spacing(2.5),
    fontWeight: 'bold',
    color: theme.palette.primary.main
  },
  description: {
    marginBottom: theme.spacing(2.5),
    color: theme.palette.secondary.light
  },
  icon: {
    fill: theme.palette.primary.main
  },
  amount: {
    margin: '0 10px'
  }
}));

export const Product = ({ product, addProductToCart, cartProducts, removeProductFromCart }) => {
  const classes = useStyles();
  const {image, category, title, descriprion, price, currency } = product;
  const cartProduct = cartProducts.find(el => el._id === product._id);

  return (
    <Paper className={classes.product}>
      <img className={classes.img} src={image} alt="product alt"/>
      <Typography className={classes.category} align="center" variant="body1">{category}</Typography>
      <Typography className={classes.title} align="center" variant="h2">{title}</Typography>
      <Typography className={classes.description} variant="body2">
        {descriprion}
      </Typography>
      <Grid container justifyContent="space-between" alignItems="center" wrap='nowrap'>
        {
          cartProduct 
          ? 
          <Grid alignItems='center' container>
            <Button variant="contained" color="primary" onClick={() => removeProductFromCart(product)}>-</Button>
            <Typography variant="h3" className={classes.amount}>{cartProduct.amount}</Typography>
            <Button variant="contained" color="primary" onClick={() => addProductToCart(product)}>+</Button>
          </Grid>
          :
          <Button variant="contained" color="primary" onClick={() => {
            addProductToCart(product);
          }}>В кошик</Button>
        }
        
        <div className={classes.likeButton} aria-label="add product to favourite">
          <Typography display='inline' variant="h3">{price*(cartProduct ? cartProduct.amount : 1)}</Typography>
          <Typography display='inline' variant="h3">{currency}</Typography>
        </div>
      </Grid>
    </Paper>
  );
};