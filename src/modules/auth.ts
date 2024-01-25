import {StackNavigationProp} from '@react-navigation/stack';
import AsyncStorageService from '../service/asyncStorage';
import {store} from '../app/store';
import {setLoginState} from '../features/login/loginSlice';

export const logout = async (navigation: StackNavigationProp<any, any>) => {
  await AsyncStorageService.deleteAllStorage();
  store.dispatch(setLoginState(null));
  navigation.replace('login');
};
