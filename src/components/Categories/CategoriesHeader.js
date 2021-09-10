import ProductsIcon from '@assets/icons/products-icon.svg';
import MeatIcon from '@assets/icons/meat-icon.svg';
import DrinksIcon from '@assets/icons/drinks-icon.svg';
import SauceIcon from '@assets/icons/sauce-icon.svg';
import BakeryIcon from '@assets/icons/bakery-icon.svg';
import { Link, makeStyles } from '@material-ui/core';

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
      borderRight: `1px solid ${theme.palette.primary.main}`,
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
    },
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

export const CategoriesHeader = () => {
  const classes = useStyles();
  return (
    <nav className={classes.categoriesHeader}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <Link href="#" variant='h4' className={classes.link}>
            <ProductsIcon className={classes.icon}/>
            <span className={classes.name}>Всі продукти</span>
          </Link>
        </li>
        <li className={classes.item}>
          <Link href="#" variant='h4' className={classes.link}>
            <MeatIcon className={classes.icon}/>
            <span className={classes.name}>М'ясо</span>
          </Link>
        </li>
        <li className={classes.item}>
          <Link href="#" variant='h4' className={classes.link}>
            <BakeryIcon className={classes.icon}/>
            <span className={classes.name}>Випічка</span>
          </Link>
        </li>
        <li className={classes.item}>
          <Link href="#" variant='h4' className={classes.link}>
            <DrinksIcon className={classes.icon}/>
            <span className={classes.name}>Напої</span>
          </Link>
        </li>
        <li className={classes.item}>
          <Link href="#" variant='h4' className={classes.link}>
            <SauceIcon className={classes.icon}/>
            <span className={classes.name}>Соуси</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};