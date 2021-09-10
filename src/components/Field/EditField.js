import { Button, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Form, Formik } from 'formik';
import { TextField } from '../Field';

const useStyles = makeStyles((theme) => ({
  editField: {
    margin: '10px 0',
    padding: '10px 20px',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '7px'
  },
  form: {
    width: '100%'
  },
  info: {
    marginRight: '10px'
  },
  buttons: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '10px',
      marginLeft: 'auto'
    },
  },
  inputName: {
    minHeight: '2rem'
  },
  input: {
    margin: 0
  },
  error: {
    marginTop: '5px'
  }
}));

export const EditField = ({immutable, label, initialValues, isError, submitHandler, isEditing, validationSchema, title, closeButtonHandler, editButtonHandler, name}) => {
  const classes = useStyles();
  
  return (
    <div className={classes.editField}>
      <Grid  container alignItems='center' justifyContent="space-between">
        {
          immutable ? 
          <Grid className={classes.info} item>
            <Typography variant='h4'>{label}:</Typography>
            <Typography className={classes.inputName} variant='h3' component='h2'>{title}</Typography>
          </Grid>
          :
          !isEditing ?
          <>
            <Grid className={classes.info} item>
              <Typography variant='h4'>{label}:</Typography>
              <Typography className={classes.inputName} variant='h3' component='h2'>{title}</Typography>
            </Grid>
            <Grid className={classes.buttons} item>
                <Button variant="contained" color="primary" onClick={editButtonHandler}>Изменить</Button>
            </Grid>
          </>
          :
          <Formik 
          initialValues={initialValues}
          onSubmit={submitHandler}
          validationSchema={validationSchema}
          >
            {({ isSubmitting }) => (
              <Form className={classes.form} noValidate>
                <Grid  container alignItems='center' justifyContent="space-between">
                  <Grid className={classes.info} item>
                    <Typography variant='h4'>{label}:</Typography>
                    <TextField className={classes.input} type="input" name={name}  variant="standard" autoFocus={true}/>
                  </Grid>
                  <Grid className={classes.buttons} item>
                    <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>Сохранить</Button>
                    <IconButton variant="contained" color="primary" aria-label="exit editing" disabled={isSubmitting} onClick={closeButtonHandler}>
                      <CloseIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        }
      </Grid>
      {isError && <Typography className={classes.error} variant="body2" color="error">Возникла ошбика, попробуйте еще раз</Typography>}
    </div>

  );
};