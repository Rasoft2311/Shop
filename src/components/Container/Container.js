import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.only('xs')]: {
      maxWidth: ''  
    },
    [theme.breakpoints.only('sm')]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.only('md')]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.only('lg')]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.only('xl')]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export const Container = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {props.children}
    </div>
  );
};