import { Grid, IconButton, makeStyles, Modal, Typography, Fade, Slide } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  inner: {
    position: 'absolute',
    right: '0',
    top: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: theme.palette.backgroundSecondary[theme.palette.type],
    color: theme.palette.secondary[theme.palette.type],
    [theme.breakpoints.up('sm')]: {
      width: '300px'
    },
  },
  content: {
    height: `calc(100% - ${theme.customVariables.headerHeightMobile}px)`
  },
  head: {
    height: theme.customVariables.headerHeightMobile,
    padding: `0 ${theme.spacing(2)}px`,
    borderBottom: '1px solid rgba(0,0,0,0.2)',
    [theme.breakpoints.up('md')]: {
      height: theme.customVariables.headerHeightDesktop,
    },
    [theme.breakpoints.up('sm')]: {
      padding: `0 ${theme.spacing(3)}px`,
    },
  },
  closeIcon: {
    fill: theme.palette.secondary[theme.palette.type],
  }
}));

export const ModalMenu = ({onNavMenuToggle, isNavMenuOpened, children, title}) => {
  const classes = useStyles();
  
  return (
    <Modal open={isNavMenuOpened} onClose={onNavMenuToggle}>
      <Slide direction="left" in={isNavMenuOpened}>
        <div className={classes.inner}>
          <Grid className={classes.head} container alignItems="center">
            <Grid container item xs={6}  justify='flex-start'><Typography variant="h2">{title}</Typography></Grid>
            <Grid container item xs={6}  justify='flex-end'>
              <IconButton aria-label="close menu" onClick={onNavMenuToggle}>
                <CloseIcon className={classes.closeIcon}/>
              </IconButton>
            </Grid>
          </Grid>
          <div className={classes.content}>
            {children}
          </div>
        </div>
      </Slide>
    </Modal>
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