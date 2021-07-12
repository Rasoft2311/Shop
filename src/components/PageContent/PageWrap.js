import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import BackgroundImage from '@assets/images/app-background.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary[theme.palette.type],
    backgroundSize: '400px',
    backgroundRepeat: 'repeat',
    backgroundImage: `url(${BackgroundImage})`
  },
  darkener: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.backgroundTransparent[theme.palette.type]
  }
}));

export const PageWrap = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.darkener}>
        {props.children}
      </div>
    </div>
  );
};

PageWrap.propTypes = {
  children: PropTypes.node.isRequired,
};