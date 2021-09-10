const yup = require('yup');

const signInSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(5).max(20)
}).noUnknown();

const signUpSchema = yup.object({
  firstName: yup.string().required().min(1).max(20),
  lastName: yup.string().required().min(1).max(20),
  email: yup.string().required().email(),
  password: yup.string().required().min(5).max(20)
}).noUnknown();

const resetPasswordSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(5).max(20),
  passwordCopy: yup.string()
  .oneOf([yup.ref('password'), null], 'Password need to match')
  .required('Password confirm is required')
}).noUnknown();

const editSchema = yup.object({
  firstName: yup.string().min(1).max(20),
  lastName: yup.string().min(1).max(20),
  password: yup.string().min(5).max(20)
})
.test('xor', 'Need to pass only one value to edit', val => {
  return Object.keys(val).length > 1 ? false : true;
})
.noUnknown();

module.exports = {
  signInSchema,
  signUpSchema,
  resetPasswordSchema,
  editSchema
};
