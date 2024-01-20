import {store} from '../app/store';
import {fetchUserData} from '../features/user/userSlice';

export const getUserData = async () => {
  await store.dispatch(fetchUserData());
};
