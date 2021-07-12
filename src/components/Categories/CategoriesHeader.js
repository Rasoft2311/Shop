import ProductsIcon from '@assets/icons/products-icon.svg';
import MeatIcon from '@assets/icons/meat-icon.svg';
import DrinksIcon from '@assets/icons/drinks-icon.svg';
import SauceIcon from '@assets/icons/sauce-icon.svg';
import BakeryIcon from '@assets/icons/bakery-icon.svg';
import PropTypes from 'prop-types';
import { Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: theme.customVariables.headerHeightMobile,
    backgroundColor: theme.palette.backgroundSecondary[theme.palette.type],
    boxShadow: '0 0 30px rgb(0 0 0 / 60%)',
    [theme.breakpoints.up('md')]: {
      height: theme.customVariables.headerHeightDesktop,
    },
  },
  list: {
    height: '100%',
    whiteSpace: 'nowrap',
    overflowY: 'scroll',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 10px'
    },
  },
  item: {
    display: 'inline-block',
    height: '100%'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: '15px',
  },
  name: {
    marginLeft: '10px',
    color: theme.palette.secondary[theme.palette.type],
  },
  icon: {
    width:'auto',
    height: '100%',
    fill: theme.palette.secondary[theme.palette.type],
  }
}));

export const CategoriesHeader = ({ extendedClass }) => {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
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

CategoriesHeader.propTypes = {
  extendedClass: PropTypes.string
};