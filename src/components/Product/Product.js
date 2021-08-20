import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, Link, List, ListItem, makeStyles, Typography } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import productImage from '@assets/images/pizza.jpg';
import { Paper } from '../Paper';
import clsx from 'clsx';

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
  }
}));

export const Product = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.product}>
      <img className={classes.img} src={productImage} alt="product alt"/>
      <Typography className={classes.category} align="center" variant="body1">Соуси</Typography>
      <Typography className={classes.title} align="center" variant="h2">Сацебелi</Typography>
      <Typography className={classes.description} variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      </Typography>
      <Grid container justifyContent="space-between">
        <Button variant="contained" color="secondary">В кошик</Button>
        <IconButton aria-label="add product to favourite">
          <FavoriteBorderIcon className={classes.icon}/>
        </IconButton>
      </Grid>
    </Paper>
  );
};