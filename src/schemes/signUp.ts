import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup.string().trim().required('Enter your name').min(2),
    email: yup.string().email().trim().required('Enter your email'),
      password: yup.string().min(8).max(32).trim().required('Enter your password'),

})