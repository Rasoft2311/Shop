import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../hoc/ProvideAuth';
import { Spinner } from '../Spinner';

export function UnauthorizedRoute({ children, ...rest }) {
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
          <Redirect
            to={{
              pathname: '/profile',
              state: { from: location },
            }}
          />
        ) : (
          <>
            {children}
          </>
        )
      }
    />
  );
}