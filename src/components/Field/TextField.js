// import { makeStyles } from '@material-ui/core';
import { useField } from 'formik';
import { TextField as Field } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     marginTop: 'auto',
//     [theme.breakpoints.up('md')]: {
//       marginLeft: theme.customVariables.headerHeightDesktop,
//     },
//   }
// }));

export const TextField = (props) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <Field
      variant="outlined"
      margin="normal"
      required
      fullWidth
      helperText={errorText}
      error={!!errorText}
      {...props}
      {...field}
    />
  );
};