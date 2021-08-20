import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'relative',
    zIndex: 2,
    backgroundColor: theme.palette.background.main,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundColor: theme.palette.background.main,
      zIndex: -2,
      transform: 'rotate(-2deg)',
      transition: 'transform 0.3s ease-in-out',
    }
  },
}));

export const Paper = ({ children, className }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.paper, className)}>
      {children}
    </div>
  );
};

Paper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};