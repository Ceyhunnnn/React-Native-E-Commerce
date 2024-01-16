import {FlatList, ScrollView, View} from 'react-native';
import {styles} from './styles';
import React, {useEffect, useState} from 'react';
import ProductCard from '../../components/prodcutCard';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/AppRoutes';
import apiCall from '../../service/api';
import {IProductDetailData, IProductId} from './types';
import LoadingView from '../../components/loading';

interface ICategoryProps {
  navigation?: StackNavigationProp<RootStackParamList, 'categoryProduct'>;
  route?: RouteProp<RootStackParamList, 'categoryProduct'>;
}
const CategoryProductScreen: React.FC<ICategoryProps> = props => {
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<IProductDetailData[]>();
  const {navigation, route} = props;

  const setTitle = (): void => {
    navigation?.setOptions({title: route?.params?.categoryName});
  };
  useEffect(() => {
    setTitle();
    async function getProducts() {
      const body: IProductId = {
        id: route?.params.categoryId,
      };
      await apiCall('getProducts', {
        body,
        type: 'post',
        message: true,
        okButtonEvent: (): void => navigation?.goBack(),
      }).then(res => {
        setProduct(res?.data.data);
        setLoading(false);
      });
    }
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) {
    return <LoadingView />;
  }
  return (
    <View style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.content}>
          <FlatList
            nestedScrollEnabled={true}
            scrollEnabled={false}
            numColumns={2}
            data={product}
            renderItem={({item}) => (
              <ProductCard
                name={item.name}
                price={item.price}
                image={item.cover_photo}
                discount={item.discount}
                onPress={(): void => {
                  navigation?.navigate('productDetail');
                }}
              />
            )}
            keyExtractor={item => item._id}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default CategoryProductScreen;
