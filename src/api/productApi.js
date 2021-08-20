import axios from 'axios';
import { GET_ALL_PRODUCTS } from './variables';

export const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    axios
    .get(GET_ALL_PRODUCTS)
    .then((res) => {
      console.log("getAllProducts > axios res=", res);
      resolve(res.data)
    })
    .catch((err) => {
      console.log("getAllProducts > axios err=", err);
      reject(err);
    });
  });
};
