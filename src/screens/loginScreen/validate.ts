import {object, string} from 'yup';
import {ILoginType} from '../../types/auth';
export const initialValues: ILoginType = {
  email: 'test@gmail.com',
  password: 'test123',
};
export const loginValidation = object({
  email: string().email().required(),
  password: string()
    .min(3, 'Must contain at least 3 characters')
    .max(15, 'Must contain maximum 15 characters')
    .required(),
});
