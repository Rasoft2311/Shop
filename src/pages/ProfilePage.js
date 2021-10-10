import { Button, Container, makeStyles, Typography } from '@material-ui/core';
import { Paper } from '../components/Paper';
import ProfileImage from '@assets/images/profile.png';
import { useAuth } from '../hooks/useAuth';
import { EditFieldContainer } from '../components/Field';
import { firstNameSchema, lastNameSchema, passwordSchema } from '../../validation/front';
import { useRouter } from '../hooks/useRouter';

const useStyles = makeStyles((theme) => ({
  profilePage: {
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(4)
  },
  img: {
    display: 'block',
    width: '50%',
    maxWidth: '300px',
    height: 'auto',
    margin: '0 auto'
  },
  title: {
    marginBottom: theme.spacing(3),
    textAlign: 'center'
  },
  logOutButton: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(4)
  }
}));

export const ProfilePage = () => {
  const classes = useStyles();
  const auth = useAuth();
  const { push } = useRouter();

  return (
    <Container component="div" maxWidth="md">
      <Paper className={classes.profilePage}>
        <img className={classes.img} src={ProfileImage} alt="profile"/>
        <Typography className={classes.title} variant='h1'>Профиль</Typography>
        <EditFieldContainer label="Email" title={auth.user.email} immutable={true}/>
        <EditFieldContainer label="First Name" title={auth.user.firstName} name='firstName' validationSchema={firstNameSchema}/>
        <EditFieldContainer label="Last Name" title={auth.user.lastName} name='lastName' validationSchema={lastNameSchema}/>
        <EditFieldContainer label="Password" title={auth.user.password} name='password' type='password' validationSchema={passwordSchema}/>
        <Button
          className={classes.logOutButton}
          variant="contained" 
          color="primary" 
          onClick={()=> {
            auth.signOut().then(() => push('/'));
          }}>
          Log Out
        </Button>
      </Paper>
    </Container>
  );
};