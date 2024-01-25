/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {WatchIcon} from '../Icon';
import {categoryIcons} from '../../constant';

interface ICategoryProps {
  title: string;
  onPress: () => void;
  slug?: string;
}
const CategoryCard: React.FC<ICategoryProps> = props => {
  const {title, onPress, slug} = props;
  return (
    <Pressable style={styles.categoryCard} onPress={onPress}>
      <View style={styles.icon}>{categoryIcons(slug ?? '')}</View>
      <Text numberOfLines={2} style={styles.categoryTitle}>
        {title}
      </Text>
    </Pressable>
  );
};
export default CategoryCard;
