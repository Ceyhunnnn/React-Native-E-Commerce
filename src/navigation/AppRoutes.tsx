import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PathConstant from './PathConstant';
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';
import HomeLayout from './AppBottomStack';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => {
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
    </Stack.Navigator>
  );
};

export default AppRoutes;
