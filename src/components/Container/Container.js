import { makeStyles } from '@material-ui/core';
import { checkPropTypes } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.only('xs')]: {
      maxWidth: ''  
    },
    [theme.breakpoints.only('sm')]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.only('md')]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.only('lg')]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.only('xl')]: {
      backgroundColor: theme.palette.secondary.main,
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

Container.propTypes = {
  children: checkPropTypes.node.isRequired,
};