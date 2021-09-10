import axios from 'axios';
import { GET_ALL_PRODUCTS } from './variables';

export const apiGetAllProducts = () => {
  return new Promise((resolve, reject) => {
    axios
    .get(GET_ALL_PRODUCTS)
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
  });
};
