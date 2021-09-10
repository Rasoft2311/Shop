import { useField } from 'formik';
import { TextField as Field } from '@material-ui/core';

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