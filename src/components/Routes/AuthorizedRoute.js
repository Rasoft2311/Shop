import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Spinner } from '../Spinner';

export function AuthorizedRoute({ children, ...rest }) {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user === null ? (
          <Spinner color='secondary' width='300px' height='300px'/>
        )
        : 
        auth.user ? (
          <>
            {children}
          </>
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}