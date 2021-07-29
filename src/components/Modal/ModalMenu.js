import { Grid, IconButton, makeStyles, Modal, Typography, Fade, Slide } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  modalMenuInner: {
    position: 'absolute',
    right: '0',
    top: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: theme.palette.backgroundSecondary[theme.palette.type],
    color: theme.palette.secondary[theme.palette.type],
    [theme.breakpoints.up('sm')]: {
      width: props => `${props.menuWidth}px`
    },
  },
  modalMenuContent: {
    height: `calc(100% - ${theme.customVariables.headerHeightMobile}px)`,
    [theme.breakpoints.up('md')]: {
      height: `calc(100% - ${theme.customVariables.headerHeightDesktop}px)`,
    },
  },
  head: {
    height: theme.customVariables.headerHeightMobile,
    padding: `0 ${theme.spacing(2)}px`,
    borderBottom: `1px solid ${theme.palette.borderLine[theme.palette.type]}`,
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

export const ModalMenu = ({onMenuToggle, isMenuOpened, children, title, menuWidth}) => {
  const classes = useStyles({menuWidth});
  
  return (
    <Modal open={isMenuOpened} onClose={onMenuToggle}>
      <Slide direction="left" in={isMenuOpened}>
        <div className={classes.modalMenuInner}>
          <Grid className={classes.head} container alignItems="center">
            <Grid container item xs={6}  justifyContent='flex-start'><Typography variant="h2">{title}</Typography></Grid>
            <Grid container item xs={6}  justifyContent='flex-end'>
              <IconButton aria-label="close menu" onClick={onMenuToggle}>
                <CloseIcon className={classes.closeIcon}/>
              </IconButton>
            </Grid>
          </Grid>
          <div className={classes.modalMenuContent}>
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