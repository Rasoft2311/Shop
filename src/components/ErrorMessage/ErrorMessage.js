import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  errorMessage: {
    padding: theme.spacing(1),
  }
}));

export const ErrorMessage = ({message}) => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.errorMessage} color="error" align="center" variant="h3" component="p">{message}</Typography>
    </>
  );
};