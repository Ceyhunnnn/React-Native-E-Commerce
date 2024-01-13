import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PathConstant} from './PathConstant';
import LoginScreen from '../screens/loginScreen';

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
    </Stack.Navigator>
  );
};

export default AppRoutes;
