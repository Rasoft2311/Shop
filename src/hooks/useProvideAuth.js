import { useEffect, useState } from 'react';
import { getCurrentUserInfo, apiSignIn, apiSignUp, apiSignOut, apiResetPassword, apiEditUser } from '../api/userApi';

export function useProvideAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUserInfo().then(
    (data) => {
      setUser(data.user);
    },
    () => {
      setUser(false);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('storage', function(event){
      if (event.key === 'auth-event') {
        document.location.reload();
      }
    }); 
  }, []); 

  const signIn = (data) => apiSignIn(data).then(res =>  {
    res.success ? setUser(res.user) : setUser(false);
    if(res.success) {
      setUser(res.user);
      localStorage.setItem('auth-event', 'auth-event' + Math.random());
    }
    return res;
  });

  const signUp = (data) => apiSignUp(data);

  const signOut = () => apiSignOut().then(() => {
    setUser(false);
    localStorage.setItem('auth-event', 'auth-event' + Math.random());
  });

  const resetPassword = (data) => apiResetPassword(data);

  const editUser = (data) => apiEditUser(data).then((res) => {
    setUser(res.user);
  }); 

  return {
    user,
    signIn,
    signOut,
    signUp,
    resetPassword,
    editUser
  };
}
