import { IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { ModalMenu } from '../Modal';
import { useToggle } from '../../hooks/useToggle';
import { Navigation } from '../Navigation';

const useStyles = makeStyles((theme) => ({
  button: {
    '&:hover': {
      opacity: 0.9
    }
  },
  icon: {
    display: 'block',
    fill: theme.palette.secondary.main,
  },
}));

export const HeaderNavbar = () => {
  const classes = useStyles();
  const [isOpened, toggleIsOpened] = useToggle(false);
  return (
    <>
      <IconButton className={classes.button} onClick={toggleIsOpened} aria-label="open menu">
        <MenuIcon className={classes.icon}/>
      </IconButton>
      <ModalMenu menuWidth='300' isMenuOpened={isOpened} onMenuToggle={toggleIsOpened} title="Menu">
        <Navigation onLinkClicked={toggleIsOpened}/>
      </ModalMenu>
    </>
  );
}; 