import FacebookLogo from '@assets/icons/facebook-logo.svg';
import InstagramLogo from '@assets/icons/instagram-logo.svg';
import TwitterLogo from '@assets/icons/twitter-logo.svg';
import { Grid, Hidden, Link, makeStyles } from '@material-ui/core';
import { HeaderCategories } from './HeaderCategories';
import { HeaderProfile } from './HeaderProfile';
import { Link as BrowserLink} from 'react-router-dom';
import { HeaderCart } from './HeaderCart';
import { HeaderNavbar } from './HeaderNavbar';


const useStyles = makeStyles((theme) => ({
  header: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: 10
  },
  inner: {
    height: theme.customVariables.headerHeightMobile,
    padding: `0 ${theme.spacing(2)}px`,
    backgroundColor: theme.palette.backgroundSecondary.main,
    [theme.breakpoints.up('md')]: {
      height: theme.customVariables.headerHeightDesktop,
    },
    [theme.breakpoints.up('sm')]: {
      padding: `0 ${theme.spacing(3)}px`,
    },
  },
  logo: {
    color: theme.palette.secondary.main,
    fontSize: '2rem',
    '&:hover': {
      opacity: 0.9
    }
  },
  logoWrap: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start'
    },
  },
  icon: {
    display: 'block',
    fill: theme.palette.secondary.main,
    '&:hover': {
      opacity: 0.9
    }
  },
  innerItem: {
    marginRight: theme.spacing(2)
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Grid container className={classes.inner}>
        <Hidden xsDown>
          <Grid item container sm={5} alignItems="center" >
            <Link href="https://instagram.com" className={classes.innerItem} aria-label="open our instagram page">
              <InstagramLogo className={classes.icon}/>
            </Link>
            <Link href="https://facebook.com" className={classes.innerItem} aria-label="open our facebook page">
              <FacebookLogo className={classes.icon}/>
            </Link>
            <Link href="https://twitter.com" className={classes.innerItem} aria-label="open our twitter page">
              <TwitterLogo className={classes.icon}/>
            </Link>
          </Grid>
        </Hidden>
        <Grid className={classes.logoWrap} item container xs={2} justifyContent='center' alignItems="center">
          <Link to="/" component={BrowserLink} aria-label="open our main page">
            <span className={classes.logo}>Shop</span>
          </Link>
        </Grid>
        <Grid item container xs={10} sm={5} justifyContent="flex-end" alignItems="center">
          <div className={classes.innerItem}>
            <HeaderProfile />
          </div>
          <div className={classes.innerItem}>
            <HeaderCart />
          </div>
          <div>
            <HeaderNavbar />
          </div>
        </Grid>
      </Grid>
      <HeaderCategories/>
    </header>
  );
};