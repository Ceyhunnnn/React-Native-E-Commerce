import {object, string} from 'yup';
import {IRegisterType} from '../../types/auth';
export const initialValues: IRegisterType = {
  name: '',
  surname: '',
  email: '',
  password: '',
};
export const registerValidation = object({
  name: string()
    .min(3, 'Must contain at least 3 characters')
    .max(15, 'Must contain maximum 15 characters')
    .required(),
  surname: string()
    .min(3, 'Must contain at least 3 characters')
    .max(15, 'Must contain maximum 15 characters')
    .required(),
  email: string().email().required(),
  password: string()
    .min(3, 'Must contain at least 3 characters')
    .max(15, 'Must contain maximum 15 characters')
    .required(),
});
