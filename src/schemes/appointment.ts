import * as yup from 'yup';

const regExpPhone = new RegExp(/^\+380[3-9][0-9]{8}$/);
const regExpTime = new RegExp(/^([01]\d|2[0-3]):([0-5]\d)$/);
const regExpAge = new RegExp(/^\S[0-9]{0,3}$/);


export const schema = yup.object().shape({
    address: yup.string().trim().required('Enter your address'),
    age: yup.string().matches(regExpAge, 'Invalid Age').required("Enter your child's age"),
  name: yup.string().min(2).trim().required('Enter your name'),
  phone: yup
    .string()
    .matches(regExpPhone, 'Invalid phone number')
    .required('Enter your phone'),
  time: yup
    .string()
    .matches(regExpTime, 'Invalid time format')
    .required('Choose time'),
  email: yup.string().email().trim().required('Enter your email'),
  comment: yup.string().trim(),
});