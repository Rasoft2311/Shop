import { List, ListItem, makeStyles } from '@material-ui/core';
import { ShoppingCartProductListItem } from './ShoppingCartProductListItem';

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
    '&:last-child': {
      marginBottom: 0,
    }
  },
}));

export const ShoppingCartProductList = ({products}) => {
  const classes = useStyles();
  return (
    <List className={classes.shoppingCartList} disablePadding>
      {products.map((product) => (
        <ListItem key={product._id} className={classes.item} disableGutters>
          <ShoppingCartProductListItem product={product} />
        </ListItem>
      ))}
    </List>
  );
};