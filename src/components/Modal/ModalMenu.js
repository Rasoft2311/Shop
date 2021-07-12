import { Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    // display: 'none',
    backgroundColor: theme.palette.backgroundTransparent[theme.palette.type]
  },
  inner: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.palette.backgroundSecondary[theme.palette.type],
    color: theme.palette.secondary[theme.palette.type]
  },
  head: {
    height: theme.customVariables.headerHeightMobile,
    padding: '0 15px',
    [theme.breakpoints.up('md')]: {
      height: theme.customVariables.headerHeightDesktop,
    },
    [theme.breakpoints.up('sm')]: {
      padding: '0 25px',
    },
    borderBottom: '1px solid rgba(0,0,0,0.2)'
  },
  closeIcon: {
    fill: theme.palette.secondary[theme.palette.type],
  }
}));

export const ModalMenu = (props) => {
  const classes = useStyles();

  useEffect(() => {
    console.log(props.scrollableElRef)
  });
  
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <Grid className={classes.head} container alignItems="center">
          <Grid container item xs={6}  justify='flex-start'><Typography variant="h2">{props.title}</Typography></Grid>
          <Grid container item xs={6}  justify='flex-end'>
            <IconButton aria-label="close menu">
              <CloseIcon className={classes.closeIcon}/>
            </IconButton>
          </Grid>
        </Grid>
        {props.children}
      </div>
    </div>
  );
};

ModalMenu.propTypes = {
  children: PropTypes.node.isRequired,
  scrollableElRef: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  title: PropTypes.string.isRequired
};