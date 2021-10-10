import { Link, List, ListItem, makeStyles } from '@material-ui/core';
import { Link as BrowserLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  navigation: {
    height: '100%',
    overflow: 'auto'  
  },
  link: {
    width: '100%',
    padding: theme.spacing(2),
    color: theme.palette.primary.main,
    textAlign: 'center',
    transition: 'opacity .2s ease-in-out',
    '&:hover': {
      backgroundColor: theme.palette.backgroundThird.main,
    },
  },
  active: {
    color: theme.palette.third.main,
  }
}));

export const Navigation = ({ onLinkClicked }) => {
  const classes = useStyles();
  return (
    <nav>
      <List className={classes.navigation} disablePadding>
        <ListItem disableGutters>
          <Link onClick={onLinkClicked} className={classes.link} component={BrowserLink} to="/products" variant="h3">
            Main Page
          </Link>
        </ListItem>
        <ListItem disableGutters>
          <Link onClick={onLinkClicked} className={classes.link} component={BrowserLink} to="/products" variant="h3">
            Test Link 1
          </Link>
        </ListItem>
        <ListItem disableGutters>
          <Link onClick={onLinkClicked} className={classes.link} component={BrowserLink} to="/products" variant="h3">
            Test Link 2
          </Link>
        </ListItem>
        <ListItem disableGutters>
          <Link onClick={onLinkClicked} className={classes.link} component={BrowserLink} to="/products" variant="h3">
            Test Link 3
          </Link>
        </ListItem>
        <ListItem disableGutters>
          <Link onClick={onLinkClicked} className={classes.link} component={BrowserLink} to="/products" variant="h3">
            Test Link 4
          </Link>
        </ListItem>
      </List>
    </nav>
  );
};