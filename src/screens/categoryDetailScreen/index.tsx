import {ScrollView, View} from 'react-native';
import {styles} from './styles';
import React, {useEffect} from 'react';
import ProductCard from '../../components/prodcutCard';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/AppRoutes';

interface ICategoryProps {
  navigation?: StackNavigationProp<RootStackParamList, 'categoryProduct'>;
  route?: RouteProp<RootStackParamList, 'categoryProduct'>;
}
const CategoryProductScreen: React.FC<ICategoryProps> = props => {
  const {navigation, route} = props;

  const setTitle = (): void => {
    navigation?.setOptions({title: route?.params?.categoryName});
  };
  useEffect(() => {
    setTitle();
  });
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.gridArea}>
          <ProductCard
            name={''}
            price={0}
            image={''}
            discount={0}
            onPress={() => {
              navigation?.navigate('productDetail');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default CategoryProductScreen;
