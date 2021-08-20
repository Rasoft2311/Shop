import { Button, Grid, Link, List, ListItem, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  orderSummary: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '400px',
    margin: '0 auto',
    height: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
    },
  },
  inner: {
    display: 'flex'
  },
  amount: {
    marginLeft: '10px',
    marginRight: '10px'
  }
}));

export const OrderSummary = () => {
  const classes = useStyles();
  return (
    <div className={classes.orderSummary}>
      <Grid container justifyContent="space-between">
        <Grid item className={classes.inner}>
          <Typography variant="h2" component="h3">Сума</Typography>
          <Typography className={classes.amount} variant="h2" component="p">300$</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">Замовити</Button>
        </Grid>
      </Grid>
    </div>
  );
};