import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.customVariables.headerHeightMobile*2,
    [theme.breakpoints.up('md')]: {
      marginTop: theme.customVariables.headerHeightDesktop*2,
    },
  }
}));

export const Main = (props) => {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      {props.children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};