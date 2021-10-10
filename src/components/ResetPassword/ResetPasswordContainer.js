import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { ResetPassword } from './ResetPassword';

const initialValues = {
  email: '',
  password: '',
  passwordCopy: ''
};

export const ResetPasswordContainer = () => {
  const { resetPassword } = useAuth();
  const [ error, setError ] = useState(null);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const submitHandler = (data, { setSubmitting }) => {
    setSubmitting(true);
    setError(null);
    resetPassword(data).then((res)=> {
      if(res.success) return setIsEmailSent(true);
      setError(res.message);
      setSubmitting(false);
    }).catch(err => {
      setError(err.message);
      setSubmitting(false);
    });
  };
  return <ResetPassword submitHandler={submitHandler} initialValues={initialValues} isEmailSent={isEmailSent} error={error} />;
};