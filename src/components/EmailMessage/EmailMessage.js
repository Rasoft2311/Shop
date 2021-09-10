import { makeStyles, Typography } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(() => ({
  icon: {
    marginBottom: '10px',
    fontSize: '4rem'
  }
}));

export const EmailMessage = ({message}) => {
  const classes = useStyles();
  return (
    <>
      <EmailIcon className={classes.icon} color="primary"/>
      <Typography align="center" variant="h3" color="primary">{message}</Typography>
    </>
  );
};