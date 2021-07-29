import { Grid, IconButton, Link, List, ListItem, makeStyles, Typography } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import productImage from '@assets/images/product-small.jpeg';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  productCart: {
  },
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
    border: `1px solid ${theme.palette.secondary[theme.palette.type]}`,
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
    fill: theme.palette.secondary[theme.palette.type],
  }
}));

export const ProductCart = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center">
      <Grid xs={4} item>
        <img className={classes.img} src={productImage} />
      </Grid>
      <Grid xs={7} item className={classes.control}>
        <Typography variant="h4" component="h3" >Burger XXL</Typography>
        <Grid container justifyContent="center" alignItems="center" className={classes.counterButtons}>
          <IconButton className={classes.counterButton} aria-label="remove one instance of this product">
            <RemoveIcon className={clsx(classes.icon, classes.counterIcon)}/>
          </IconButton>
          <Typography className={classes.counterAmount} variant="body1" component="span" >1</Typography>
          <IconButton className={classes.counterButton} aria-label="add one instance of this product">
            <AddIcon className={clsx(classes.icon, classes.counterIcon)}/>
          </IconButton>
        </Grid>
        <Typography variant="body1" component="p" >300$</Typography>
      </Grid>
      <Grid xs={1} container item justifyContent="flex-end">
        <IconButton aria-label="remove item from cart">
          <CancelIcon className={clsx(classes.icon,classes.closeIcon)}/>
        </IconButton>
      </Grid>
    </Grid>
  );
};