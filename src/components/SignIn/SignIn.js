import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { TextField } from '../Field';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Form, Formik } from 'formik';
import { Link as BrowserLink} from 'react-router-dom';
import { Paper } from '../Paper';
import { signInSchema } from '../../../validation';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(8),
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const SignIn = () => {
  const classes = useStyles();

  return (
    <Container component="div" maxWidth="sm">
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h2" color="primary">Sign in</Typography>
        <Formik 
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={(data) => {
            console.log(data);
          }}
          validationSchema={signInSchema}
          >
          <Form className={classes.form} noValidate>
            <TextField type="input" name="email" label="Email Address" id="email" />
            <TextField type="input" name="password" label="Password" id="password" />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </Form>
        </Formik>
        <Grid container>
            <Grid item xs>
              <Link to="/reset-passport" component={BrowserLink} variant="body2" color="primary">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/sign-up" component={BrowserLink} variant="body2" color="primary">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
      </Paper>
    </Container>
  );
};