/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PathConstant from './PathConstant';
import HomeScreen from '../screens/homeScreen';
import BasketScreen from '../screens/basketScreen';
import ProfileScreen from '../screens/profileScreen';
import {BasketIcon, HomeIcon, PersonIcon} from '../components/Icon';

const Tab = createBottomTabNavigator();

const HomeLayout: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={PathConstant.HOME}
      options={{
        headerShown: false,
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => <HomeIcon color={color} size={size} />,
      }}
      component={HomeScreen}
    />
    <Tab.Screen
      name={PathConstant.BASKET}
      options={{
        title: 'Basket',
        tabBarLabel: 'Basket',
        tabBarIcon: ({color, size}) => <BasketIcon size={size} color={color} />,
      }}
      component={BasketScreen}
    />
    <Tab.Screen
      name={PathConstant.PROFILE}
      options={{
        title: 'Profile',
        tabBarLabel: 'Profile',
        tabBarIcon: ({color, size}) => <PersonIcon size={size} color={color} />,
      }}
      component={ProfileScreen}
    />
  </Tab.Navigator>
);
export default HomeLayout;
