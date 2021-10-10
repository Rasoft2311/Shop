import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as BrowserLink} from 'react-router-dom';
import { TextField } from '../Field';
import { Form, Formik } from 'formik';
import { resetPasswordSchema } from '../../../validation/front';
import { Paper } from '../Paper';
import { EmailMessage } from '../EmailMessage';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(8),
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    marginTop: '15px'
  }
}));

export const ResetPassword = ({submitHandler, initialValues, isEmailSent, error}) => {
  const classes = useStyles();

  return (
    <Container component="div" maxWidth="sm">
      <Paper className={classes.paper}>
        {!isEmailSent ? 
          <>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h2" color="primary">Reset Password</Typography>
            <Formik 
                initialValues={initialValues}
                onSubmit={submitHandler}
                validationSchema={resetPasswordSchema}
                >
              {({ isSubmitting }) => (
                <Form className={classes.form} noValidate>
                  <TextField type="input" name="email" label="Email Address" id="email" />
                  <TextField type="password" name="password" label="Password" id="password" />
                  <TextField type="password" name="passwordCopy" label="Password copy" id="password-copy" />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    className={classes.submit}
                  >
                    Reset
                  </Button>
                </Form>
              )}
            </Formik>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/sign-in" component={BrowserLink} variant="body2" color="primary">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            {error && 
              <Typography className={classes.error} variant="body2" color="error">{error}</Typography>
            }
          </>
        : <EmailMessage message="Email with reset link was sent." />
        }
      </Paper>
    </Container>
  );
};