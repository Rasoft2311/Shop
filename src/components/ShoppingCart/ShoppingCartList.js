import { List, ListItem, makeStyles } from '@material-ui/core';
import { ProductCart } from '../Product';

const useStyles = makeStyles((theme) => ({
  shoppingCartList: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
    },
  },
  item: {
    width: '100%',
    marginBottom: '10px',
    color: theme.palette.primary.main,
    textAlign: 'center',
    "&:last-child": {
      marginBottom: 0,
    }
  },
}));

export const ShoppingCartList = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.shoppingCartList} disablePadding>
      <ListItem className={classes.item} disableGutters>
          <ProductCart />
      </ListItem>
      <ListItem className={classes.item} disableGutters>
          <ProductCart />
      </ListItem>
    </List>
  );
};