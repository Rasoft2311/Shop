import { useContext } from 'react';
import { authContext } from '../hoc/ProvideAuth';

export function useAuth() {
  return useContext(authContext);
}