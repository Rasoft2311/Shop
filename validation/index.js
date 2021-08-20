const yup = require('yup');

const signInSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(5).max(20)
});

const signUpSchema = yup.object({
  firstName: yup.string().required().min(1).max(20),
  lastName: yup.string().required().min(1).max(20),
  email: yup.string().required().email(),
  password: yup.string().required().min(5).max(20)
});

module.exports = {
  signInSchema,
  signUpSchema
};