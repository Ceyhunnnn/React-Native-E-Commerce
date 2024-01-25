import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import {StyleProp, ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
interface IIconsProps {
  size: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
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
export const DeleteIcon: React.FC<IIconsProps> = props => {
  return (
    <MaterialCommunityIcons
      name="delete"
      size={props.size}
      color={props.color}
      style={props.style}
      onPress={props.onPress}
    />
  );
};
export const WomanBag: React.FC<IIconsProps> = props => {
  return (
    <SimpleLineIcons
      name="handbag"
      size={props.size}
      color={props.color}
      style={props.style}
      onPress={props.onPress}
    />
  );
};
export const MenTshirt: React.FC<IIconsProps> = props => {
  return (
    <Ionicons
      name="shirt-outline"
      size={props.size}
      color={props.color}
      style={props.style}
      onPress={props.onPress}
    />
  );
};
export const TVIcon: React.FC<IIconsProps> = props => {
  return (
    <FontAwesome
      name="tv"
      size={props.size}
      color={props.color}
      style={props.style}
      onPress={props.onPress}
    />
  );
};
export const Kitchen: React.FC<IIconsProps> = props => {
  return (
    <FontAwesome6
      name="kitchen-set"
      size={props.size}
      color={props.color}
      style={props.style}
      onPress={props.onPress}
    />
  );
};
export const Medicine: React.FC<IIconsProps> = props => {
  return (
    <AntDesign
      name="medicinebox"
      size={props.size}
      color={props.color}
      style={props.style}
      onPress={props.onPress}
    />
  );
};
export const Sports: React.FC<IIconsProps> = props => {
  return (
    <MaterialIcons
      name="sports-tennis"
      size={props.size}
      color={props.color}
      style={props.style}
      onPress={props.onPress}
    />
  );
};
