import { Link, List, ListItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  orderSummary: {
    height: '100%',
  },
}));

export const OrderSummary = () => {
  const classes = useStyles();
  return (
    <div className={classes.orderSummary}>OrderSummary</div>
  );
};