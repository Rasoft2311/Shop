import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { SignUp } from './SignUp';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

export const SignUpContainer = () => {
  const { signUp } = useAuth();
  const [ error, setError ] = useState(null);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const submitHandler = (data, { setSubmitting }) => {
    setSubmitting(true);
    setError(null);
    signUp(data).then((res)=> {
      if(res.success) return setIsEmailSent(true);
      setError(res.message);
      setSubmitting(false);
    }).catch(err => {
      setError(err.message);
      setSubmitting(false);
    });
  };
  return <SignUp submitHandler={submitHandler} initialValues={initialValues} isEmailSent={isEmailSent} error={error} />;
};