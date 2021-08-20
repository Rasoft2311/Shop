import axios from 'axios';
import { GET_USER_INFO } from './variables';

export const getUser = (successCallback, errorCallback) => {
  return new Promise((resolve, reject) => {
    axios
    .get(GET_USER_INFO)
    .then((res) => {
      console.log("getUserInfo > axios res=", res);
      resolve(res.data);
    })
    .catch((err) => {
      console.log("getUserInfo > axios err=", err);
      reject(err);
    });
  });
};