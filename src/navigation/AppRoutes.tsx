import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';
import HomeLayout from './AppBottomStack';
import EditProfile from '../screens/profileScreen/screens/editProfile';
import CategoryProductScreen from '../screens/categoryDetailScreen';
import ProductDetailScreen from '../screens/productDetailScreen';
import {IProductDetailData} from '../screens/categoryDetailScreen/types';

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
  return (
    <Stack.Navigator>
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
