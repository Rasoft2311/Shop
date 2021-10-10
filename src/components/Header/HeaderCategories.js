import ProductsIcon from '@assets/icons/products-icon.svg';
import MeatIcon from '@assets/icons/meat-icon.svg';
import DrinksIcon from '@assets/icons/drinks-icon.svg';
import SauceIcon from '@assets/icons/sauce-icon.svg';
import BakeryIcon from '@assets/icons/bakery-icon.svg';
import { Link, makeStyles } from '@material-ui/core';
import { Link as BrowserLink} from 'react-router-dom';
import { useRouter } from '../../hooks/useRouter';
import { useRouteMatch } from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  categoriesHeader: {
    width: '100%',
    height: theme.customVariables.headerHeightMobile,
    backgroundColor: theme.palette.background.main,
    boxShadow: '0 0 30px rgb(0 0 0 / 60%)',
    [theme.breakpoints.up('md')]: {
      position: 'fixed',
      left: 0,
      top: theme.customVariables.headerHeightDesktop,
      width: theme.customVariables.headerHeightDesktop,
      height: '100vh',
    },
  },
  list: {
    height: '100%',
    backgroundColor: 'inherit',
    whiteSpace: 'nowrap',
    overflowY: 'scroll',
    transition: 'width .3s ease-in-out',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 10px'
    },
    [theme.breakpoints.up('md')]: {
      display: 'block',
      width: '100%',
      padding: 0,
      boxShadow: '0 0 30px rgb(0 0 0 / 20%)',
      overflowX: 'hidden',
      overflowY: 'auto',
      whiteSpace: 'initial',
      '&:hover': {
        width: '200px',
      },
    },
  },
  item: {
    display: 'inline-block',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      height: 'auto',
    },
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: '15px',
    [theme.breakpoints.up('md')]: {
      padding: '20px',
      transition: 'background-colot 1s ease-in-out',
      '&:hover': {
        backgroundColor: theme.palette.backgroundThird.main,
      },
    },
  },
  linkActive: {
    backgroundColor: theme.palette.backgroundThird.main,
  },
  name: {
    marginLeft: '10px',
    color: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      width: '105px',
      flexShrink: '0',
      marginLeft: '20px'
    },
    
  },
  icon: {
    width:'auto',
    height: '100%',
    fill: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
      display: 'block',
      width:`${theme.customVariables.headerHeightDesktop - 40}px`,
      padding: 0,
    },
  }
}));

export const HeaderCategories = () => {
  const classes = useStyles();
  const { query } = useRouter();
  const match = useRouteMatch({
    path: '/products',
  });
  return (
    <nav className={classes.categoriesHeader}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <Link component={BrowserLink} to="/products" variant='h4' className={clsx(classes.link,{[classes.linkActive]: !query.category && match})}>
            <ProductsIcon className={classes.icon}/>
            <span className={classes.name}>All products</span>
          </Link>
        </li>
        <li className={classes.item}>
          <Link component={BrowserLink} to="/products?category=meat" variant='h4' className={clsx(classes.link,{[classes.linkActive]: query.category === 'meat' && match})}>
            <MeatIcon className={classes.icon}/>
            <span className={classes.name}>Meat</span>
          </Link>
        </li>
        <li className={classes.item}>
          <Link component={BrowserLink} to="/products?category=bakery" variant='h4' className={clsx(classes.link,{[classes.linkActive]: query.category === 'bakery' && match})}>
            <BakeryIcon className={classes.icon}/>
            <span className={classes.name}>Bakery</span>
          </Link>
        </li>
        <li className={classes.item}>
          <Link component={BrowserLink} to="/products?category=drink" variant='h4' className={clsx(classes.link,{[classes.linkActive]: query.category === 'drink' && match})}>
            <DrinksIcon className={classes.icon}/>
            <span className={classes.name}>Drink</span>
          </Link>
        </li>
        <li className={classes.item}>
          <Link component={BrowserLink} to="/products?category=sauce" variant='h4' className={clsx(classes.link,{[classes.linkActive]: query.category === 'sauce' && match})}>
            <SauceIcon className={classes.icon}/>
            <span className={classes.name}>Sauce</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};