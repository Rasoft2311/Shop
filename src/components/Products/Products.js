import { Grid, IconButton, Link, List, ListItem, makeStyles, Typography } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import productImage from '@assets/images/product-small.jpeg';
import clsx from 'clsx';
import { Product } from '../Product';

const useStyles = makeStyles((theme) => ({
  products: {
  },
}));

export const Products = () => {
  const classes = useStyles();
  return (
    <Grid spacing={3} component="ul" container alignItems="center">
      <Grid component="li" item xs={12} sm={6} lg={4}>
        <Product />
      </Grid>
      <Grid component="li" item xs={12} sm={6} lg={4}>
        <Product />
      </Grid>
      <Grid component="li" item xs={12} sm={6} lg={4}>
        <Product />
      </Grid>
      <Grid component="li" item xs={12} sm={6} lg={4}>
        <Product />
      </Grid>
    </Grid>
  );
};