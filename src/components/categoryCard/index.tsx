import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {WatchIcon} from '../Icon';

interface ICategoryProps {
  title?: string;
  icon?: JSX.Element;
  onPress: () => void;
}
const CategoryCard: React.FC<ICategoryProps> = props => {
  const {title, icon, onPress} = props;
  return (
    <Pressable style={styles.categoryCard} onPress={onPress}>
      <View style={styles.icon}>
        <WatchIcon size={24} color="black" />
      </View>
      <Text style={styles.categoryTitle}>Watch</Text>
    </Pressable>
  );
};
export default CategoryCard;
