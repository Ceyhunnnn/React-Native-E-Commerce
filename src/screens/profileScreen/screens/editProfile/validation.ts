import {object, string} from 'yup';
import {store} from '../../../../app/store';

const userState = store.getState().user.data;
export interface IUserData {
  name: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
}
export const initialValues: IUserData = {
  name: userState?.name,
  lastName: userState?.lastName,
  email: userState?.email,
};

export const registerValidation = object({
  name: string()
    .min(3, 'Must contain at least 3 characters')
    .max(15, 'Must contain maximum 15 characters')
    .required(),
  lastName: string()
    .min(3, 'Must contain at least 3 characters')
    .max(15, 'Must contain maximum 15 characters')
    .required(),
});
