import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
// import Ionicons from "@expo/vector-icons/Ionicons";

interface ICategoryProps {
  title: string;
  icon: JSX.Element;
}
const CategoryCard: React.FC<ICategoryProps> = props => {
  const {title, icon} = props;
  return (
    <View style={styles.categoryCard}>
      <View style={styles.icon}>
        {/* <Ionicons name="ios-watch-outline" size={24} color="black" /> */}
      </View>
      <Text style={styles.categoryTitle}>Watch</Text>
    </View>
  );
};
export default CategoryCard;
