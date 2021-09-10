import { makeStyles, Typography } from '@material-ui/core';
import { Products } from '../Products';

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(5),
    color: theme.palette.secondary.main
  }
}));

export const ProductsSection = ({title}) => {
  const classes = useStyles();
  return (
    <section>
      <Typography className={classes.title} variant="h1">{title}</Typography>
      <Products />
    </section>
  );
};