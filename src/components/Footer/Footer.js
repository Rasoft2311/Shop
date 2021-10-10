import { makeStyles } from '@material-ui/core';
import { Link } from '@material-ui/core';
import { Link as BrowserLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 'auto',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    backgroundColor: theme.palette.backgroundSecondary.main,
  },
  logo: {
    color: theme.palette.secondary.main,
    fontSize: '2rem',
    '&:hover': {
      opacity: 0.9
    }
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Link to="/" component={BrowserLink} aria-label="open our main page">
        <span className={classes.logo}>Shop</span>
      </Link>
    </footer>
  );
}; 