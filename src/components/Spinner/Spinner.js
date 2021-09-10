import { makeStyles } from '@material-ui/core';
import LoopIcon from '@material-ui/icons/Loop';

const useStyles = makeStyles((theme) => ({
  spinner: {
    display: 'block',
    width: 'auto',
    height: 'auto',
    margin: '0 auto',
    animation: '$rotation 2s infinite linear'
  },
  '@keyframes rotation': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(359deg)'
    }
  },
}));

export const Spinner = (props) => {
  const classes = useStyles();
  return (
    <LoopIcon {...props} className={classes.spinner}/>
  );
};