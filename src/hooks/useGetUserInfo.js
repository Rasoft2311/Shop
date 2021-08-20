import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUserInfo } from '../store/User/actions';

export const useGetUserInfo = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUserInfo());
  }, []);
};