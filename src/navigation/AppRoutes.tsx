import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';
import HomeLayout from './AppBottomStack';
import EditProfile from '../screens/profileScreen/screens/editProfile';
import CategoryProductScreen from '../screens/categoryDetailScreen';
import ProductDetailScreen from '../screens/productDetailScreen';
import {IProductDetailData} from '../screens/categoryDetailScreen/types';
import TokenService from '../service/tokenService';
import LoadingView from '../components/loading';
import {setLoginState} from '../features/login/loginSlice';
import {useAppDispatch, useAppSelector} from '../app/hook';
import apiCall from '../service/api';
import AsyncStorageService from '../service/asyncStorage';
// import apiCall from '../service/api';

export type RootStackParamList = {
  login: undefined;
  register: undefined;
  home: undefined;
  homelayout: undefined;
  profile: undefined;
  editProfile: undefined;
  basket: undefined;
  orders: undefined;
  categoryProduct: {categoryName: string; categoryId: string};
  productDetail: {detail: IProductDetailData};
};

const Stack = createStackNavigator<RootStackParamList>();

const AppRoutes: React.FC<{}> = () => {
  const [isToken, setIsToken] = useState<boolean>();
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector(state => state.login.value);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function checkUserLogin() {
      const token = await TokenService.getToken();
      dispatch(setLoginState(token));
      setLoading(false);
      await apiCall('checkToken', {type: 'get'}).then(async res => {
        setIsToken(res?.data.message);
        if (!res?.data.message) {
          await AsyncStorageService.deleteAllStorage();
        }
      });
    }
    checkUserLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isLogin]);
  if (loading) {
    return <LoadingView />;
  }
  return (
    <Stack.Navigator>
      {!isLogin && !isToken && (
        <>
          <Stack.Screen
            name="login"
            options={{
              headerShown: false,
              title: 'Login',
            }}
            component={LoginScreen}
          />
          <Stack.Screen
            name="register"
            component={RegisterScreen}
            options={{
              title: 'Register',
            }}
          />
        </>
      )}
      <Stack.Screen
        name="homelayout"
        component={HomeLayout}
        options={{
          title: 'HomeLayout',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="editProfile"
        component={EditProfile}
        options={{
          title: 'Edit Profile',
          headerBackTitle: 'Profile',
        }}
      />
      <Stack.Screen
        name="categoryProduct"
        options={{
          headerBackTitle: 'Home',
        }}
        component={CategoryProductScreen}
      />
      <Stack.Screen
        name="productDetail"
        options={({route}) => ({
          title: route.params.detail.name,
          headerBackTitleVisible: false,
          headerTintColor: 'black',
        })}
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
