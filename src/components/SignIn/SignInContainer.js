import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from '../../hooks/useRouter';
import { SignIn } from './SignIn';

const initialValues = {
  email: '',
  password: ''
};

export const SignInContainer = () => {
  const { signIn } = useAuth();
  const { location, history } = useRouter();
  const { from } = location.state || { from: { pathname: '/' } };
  const [ error, setError ] = useState(null);
  const submitHandler = (data, { setSubmitting }) => {
    setSubmitting(true);
    setError(null);
    signIn(data).then((res)=> {
      if(res.success) return history.replace(from);
      setError(res.message);
      setSubmitting(false);
    }).catch(err => {
      setError(err.message);
      setSubmitting(false);
    });
  };
  return <SignIn submitHandler={submitHandler} initialValues={initialValues} error={error} />;
};