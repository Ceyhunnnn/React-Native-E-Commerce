import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import {StyleProp, ViewStyle} from 'react-native';
interface IIconsProps {
  size: number;
  color: string;
  style?: StyleProp<ViewStyle>;
}

export const HomeIcon: React.FC<IIconsProps> = props => {
  return (
    <AntDesign
      name="home"
      size={props.size}
      color={props.color}
      style={props.style}
    />
  );
};

export const BasketIcon: React.FC<IIconsProps> = props => {
  return (
    <Feather
      name="shopping-bag"
      size={props.size}
      color={props.color}
      style={props.style}
    />
  );
};
export const PersonIcon: React.FC<IIconsProps> = props => {
  return (
    <Octicons
      name="person"
      size={props.size}
      color={props.color}
      style={props.style}
    />
  );
};

export const LogoutIcon: React.FC<IIconsProps> = props => {
  return (
    <AntDesign
      name="logout"
      size={props.size}
      color={props.color}
      style={props.style}
    />
  );
};

export const UserEditICon: React.FC<IIconsProps> = props => {
  return (
    <FontAwesome5
      name="user-edit"
      size={props.size}
      color={props.color}
      style={props.style}
    />
  );
};
export const ArrowRightIcon: React.FC<IIconsProps> = props => {
  return (
    <Feather
      name="arrow-right"
      size={props.size}
      color={props.color}
      style={props.style}
    />
  );
};
export const HeartIcon: React.FC<IIconsProps> = props => {
  return (
    <Ionicons
      name="heart-outline"
      size={props.size}
      color={props.color}
      style={props.style}
    />
  );
};
export const WatchIcon: React.FC<IIconsProps> = props => {
  return (
    <Ionicons
      name="watch-outline"
      size={props.size}
      color={props.color}
      style={props.style}
    />
  );
};

export const OrdersIcon: React.FC<IIconsProps> = props => {
  return (
    <Feather
      name="shopping-cart"
      size={props.size}
      color={props.color}
      style={props.style}
    />
  );
};
