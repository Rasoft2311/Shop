import axios from 'axios';
import { CURRENT_USER, SIGN_IN, SIGN_UP, SIGN_OUT, RESET_PASSWORD } from './variables';

export const getCurrentUserInfo = (successCallback, errorCallback) => {
  return new Promise((resolve, reject) => {
    axios
    .get(CURRENT_USER)
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
  });
};

export const apiSignIn = (data) => {
  return new Promise((resolve, reject) => {
    axios
    .post(SIGN_IN, data)
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
  });
};

export const apiSignUp = (data) => {
  return new Promise((resolve, reject) => {
    axios
    .post(SIGN_UP, data)
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
  });
};

export const apiSignOut = () => {
  return new Promise((resolve, reject) => {
    axios
    .get(SIGN_OUT)
    .then(() => resolve())
    .catch((err) => reject(err));
  });
};

export const apiResetPassword = (data) => {
  return new Promise((resolve, reject) => {
    axios
    .post(RESET_PASSWORD, data)
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
  });
};

export const apiEditUser = (data) => {
  return new Promise((resolve, reject) => {
    axios
    .patch(CURRENT_USER, data)
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
  });
};


