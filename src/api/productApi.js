import axios from 'axios';
import { GET_ALL_PRODUCTS, SYSTEM_ERROR } from './variables';

export const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    try {
      axios
      .get(GET_ALL_PRODUCTS)
      .then((res) => {
        console.log("getAllProducts > axios res=", res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log("getAllProducts > axios err=", err);
        reject("Error in getAllProducts axios!");
      });
    } catch (error) {
      console.error("in productApi > getAllProducts, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};
