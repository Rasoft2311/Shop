import ShopLogo from '@assets/icons/shop-logo.svg';
import FacebookLogo from '@assets/icons/facebook-logo.svg';
import InstagramLogo from '@assets/icons/instagram-logo.svg';
import TwitterLogo from '@assets/icons/twitter-logo.svg';
import { Grid, Hidden, IconButton, Link, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CategoriesHeader } from '../Categories';
import clsx from 'clsx';
import { ModalMenuContainer } from '../Modal';
import { ModalMenu } from '../Modal/ModalMenu';
import { NavigationList } from '../List';
import { ShoppingCart } from '../ShoppingCart';



const useStyles = makeStyles((theme) => ({
  header: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
  },
  inner: {
    height: theme.customVariables.headerHeightMobile,
    padding: `0 ${theme.spacing(2)}px`,
    backgroundColor: theme.palette.background[theme.palette.type],
    [theme.breakpoints.up('md')]: {
      height: theme.customVariables.headerHeightDesktop,
    },
    [theme.breakpoints.up('sm')]: {
      padding: `0 ${theme.spacing(3)}px`,
    },
  },
  logoWrap: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start'
    },
  },
  icon: {
    fill: theme.palette.primary[theme.palette.type],
  },
  innerItem: {
    marginRight: theme.spacing(2)
  },
  cartIcon: {
    fontSize: '2.1rem'
  },
  cartAmount: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    fontSize: '.53rem',
    backgroundColor: theme.palette.third[theme.palette.type],
  }
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Grid container className={classes.inner}>
        <Hidden xsDown>
          <Grid item container sm={5} alignItems="center" >
            <Link href="#" className={classes.innerItem} aria-label="open our instagram page">
              <InstagramLogo className={classes.icon}/>
            </Link>
            <Link href="#" className={classes.innerItem} aria-label="open our facebook page">
              <FacebookLogo className={classes.icon}/>
            </Link>
            <Link href="#" className={classes.innerItem} aria-label="open our twitter page">
              <TwitterLogo className={classes.icon}/>
            </Link>
          </Grid>
        </Hidden>
        <Grid className={classes.logoWrap} item container xs={2} justifyContent='center' alignItems="center">
          <Link href="#" className={classes.logo} aria-label="open our main page">
            <ShopLogo className={classes.icon}/>
          </Link>
        </Grid>
        <Grid item container xs={10} sm={5} justifyContent="flex-end" alignItems="center">
          <div className={classes.innerItem}>
            <ModalMenuContainer>
                {({ isMenuOpened, onMenuToggle }) => (
                  <>
                    <IconButton onClick={onMenuToggle} aria-label="open shopping cart">
                      <ShoppingCartIcon className={clsx(classes.icon, classes.cartIcon)}/>
                      <span className={classes.cartAmount}>
                        0
                      </span>
                    </IconButton>
                    <ModalMenu menuWidth='400' isMenuOpened={isMenuOpened} onMenuToggle={onMenuToggle} title="Кошик">
                      <ShoppingCart />
                    </ModalMenu>
                  </>
              )}
            </ModalMenuContainer>
          </div>
          <div>
            <ModalMenuContainer>
              {({ isMenuOpened, onMenuToggle }) => (
                <>
                  <IconButton onClick={onMenuToggle} aria-label="open menu">
                    <MenuIcon className={classes.icon}/>
                  </IconButton>
                  <ModalMenu menuWidth='300' isMenuOpened={isMenuOpened} onMenuToggle={onMenuToggle} title="Меню">
                    <NavigationList/>
                  </ModalMenu>
                </>
              )}
            </ModalMenuContainer>
          </div>
        </Grid>
      </Grid>
      <CategoriesHeader/>
    </header>
  );
};