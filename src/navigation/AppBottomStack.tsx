/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import BasketScreen from '../screens/basketScreen';
import ProfileScreen from '../screens/profileScreen';
import {BasketIcon, HomeIcon, OrdersIcon, PersonIcon} from '../components/Icon';
import OrdersScreen from '../screens/ordersScreen';
import BadgeIcon from '../components/Badge';
import {store} from '../app/store';
import {useAppSelector} from '../app/hook';

const Tab = createBottomTabNavigator();
const HomeLayout: React.FC<{}> = () => {
  const basket = useAppSelector(state => state.basket);
  const [basketCount, setBasketCount] = useState<number>(0);
  useEffect(() => {
    setBasketCount(store.getState().basket.data.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basket]);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => <HomeIcon color={color} size={size} />,
          tabBarActiveTintColor: 'black',
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="basket"
        options={{
          title: 'Basket',
          tabBarLabel: 'Basket',
          tabBarIcon: ({color, size}) => (
            <BadgeIcon
              icon={<BasketIcon color={color} size={size} />}
              count={basketCount}
            />
          ),
          tabBarActiveTintColor: 'black',
        }}
        component={BasketScreen}
      />
      <Tab.Screen
        name="orders"
        options={{
          title: 'My Orders',
          tabBarLabel: 'My Orders',
          tabBarIcon: ({color, size}) => {
            return <OrdersIcon size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
        }}
        component={OrdersScreen}
      />
      <Tab.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <PersonIcon size={size} color={color} />
          ),
          tabBarActiveTintColor: 'black',
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
export default HomeLayout;
