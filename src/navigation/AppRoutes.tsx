import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PathConstant from './PathConstant';
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';
import HomeLayout from './AppBottomStack';
import EditProfile from '../screens/profileScreen/screens/editProfile';
import CategoryProductScreen from '../screens/categoryDetailScreen';
import ProductDetailScreen from '../screens/productDetailScreen';

export type RootStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  HomeLayout: undefined;
  EditProfile: undefined;
  CategoryProductScreen: {categoryName: string};
  ProductDetailScreen: undefined;
};

const Stack = createStackNavigator();

const AppRoutes: React.FC<RootStackParamList> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={PathConstant.LOGIN}
        options={{
          headerShown: false,
          title: 'Login',
        }}
        component={LoginScreen}
      />
      <Stack.Screen
        name={PathConstant.REGISTER}
        component={RegisterScreen}
        options={{
          title: 'Register',
        }}
      />
      <Stack.Screen
        name={PathConstant.HOME_LAYOUT}
        component={HomeLayout}
        options={{
          title: 'HomeLayout',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={PathConstant.EDIT_PROFILE}
        component={EditProfile}
        options={{
          title: 'Edit Profile',
          headerBackTitle: 'Profile',
        }}
      />
      <Stack.Screen
        name={PathConstant.CATEGORY_PRODUCT}
        options={{
          headerBackTitle: 'Home',
        }}
        component={CategoryProductScreen}
      />
      <Stack.Screen
        name={PathConstant.PRODUCT_DETAIL}
        options={({route}) => ({
          headerBackTitle: route.key,
        })}
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
