import { makeStyles, Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';
import { useAuth } from '../../hooks/useAuth';
import { Spinner } from '../Spinner';
import { Link as BrowserLink} from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  signIn: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      opacity: 0.9
    }
  },
  icon: {
    display: 'block',
    fill: theme.palette.secondary.main,
  },
}));

export const HeaderProfile = () => {
  const classes = useStyles();
  const { user } = useAuth();
  return (
    <>
      {user === null ? 
        <Spinner color='secondary' width='40px' height='40px'/>
        :
        <Link to={user ? '/profile' : '/sign-in'} component={BrowserLink} className={classes.signIn} aria-label="open sign in main page">
          <PersonIcon className={classes.icon} />
          <Typography variant='h4' component='div' color="secondary">{user ? user.firstName : 'Sign in'}</Typography>
        </Link>
      }
    </>
  );
}; 