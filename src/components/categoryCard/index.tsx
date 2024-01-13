import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {WatchIcon} from '../Icon';

interface ICategoryProps {
  title?: string;
  icon?: JSX.Element;
}
const CategoryCard: React.FC<ICategoryProps> = props => {
  const {title, icon} = props;
  return (
    <View style={styles.categoryCard}>
      <View style={styles.icon}>
        <WatchIcon size={24} color="black" />
      </View>
      <Text style={styles.categoryTitle}>Watch</Text>
    </View>
  );
};
export default CategoryCard;
