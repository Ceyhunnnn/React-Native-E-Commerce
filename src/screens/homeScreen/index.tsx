/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  Platform,
  View,
  ScrollView,
  Text,
  FlatList,
} from 'react-native';
import {styles} from './styles';
import React, {useEffect} from 'react';
import AppBar from './../../components/appBar';
import Slider from './../../components/slider';
import CategoryCard from './../../components/categoryCard';
import Title from './../../components/title';
import ProductCard from '../../components/prodcutCard';
import {StackNavigationProp} from '@react-navigation/stack';
import {sliderImageList} from '../../constant';
import {useAppDispatch, useAppSelector} from '../../app/hook';
import {fetchCategory} from '../../features/categories/categorySlice';
import LoadingView from '../../components/loading';
import {fetchDiscountProduct} from '../../features/discountProducts/discountProductSlice';

interface IHomeProps {
  navigation: StackNavigationProp<any, any>;
}

const HomeScreen: React.FC<IHomeProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const categoryStates = useAppSelector(state => state.category);
  const discountProdStates = useAppSelector(state => state.discountProd);
  const getAllRequiredData = () => {
    return Promise.all([
      dispatch(fetchCategory()),
      dispatch(fetchDiscountProduct()),
    ]);
  };
  useEffect(() => {
    if (!categoryStates.data && !discountProdStates.data) {
      getAllRequiredData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (categoryStates.loading) {
    return <LoadingView />;
  }
  return (
    <SafeAreaView
      style={[
        styles.container,
        {paddingTop: Platform.OS === 'android' ? 25 : 0},
      ]}>
      <View style={styles.content}>
        <AppBar />
        <ScrollView
          style={{width: '100%'}}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={{paddingBottom: 20}}>
            <Slider imageList={sliderImageList} />
            <Title title="Categories" />
            {categoryStates.data && (
              <FlatList
                nestedScrollEnabled={true}
                scrollEnabled={false}
                numColumns={4}
                data={categoryStates.data}
                renderItem={({item}) => (
                  <CategoryCard
                    key={item._id}
                    title={item.name}
                    onPress={() =>
                      navigation.navigate('categoryProduct', {
                        categoryName: item.name,
                      })
                    }
                  />
                )}
                keyExtractor={item => item._id}
              />
            )}
            {categoryStates.error && <Text>{categoryStates.error}</Text>}
            <Title title="Discount Products" />
            {discountProdStates.data && (
              <FlatList
                nestedScrollEnabled={true}
                scrollEnabled={false}
                contentContainerStyle={{alignItems: 'center'}}
                numColumns={2}
                data={discountProdStates.data}
                renderItem={({item}) => (
                  <ProductCard
                    name={item.name}
                    price={item.price}
                    image={item.cover_photo}
                    discount={item.discount}
                    onPress={function (): void {
                      null;
                    }}
                  />
                )}
                keyExtractor={item => item._id}
              />
            )}
            {discountProdStates.error && (
              <Text>{discountProdStates.error}</Text>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
