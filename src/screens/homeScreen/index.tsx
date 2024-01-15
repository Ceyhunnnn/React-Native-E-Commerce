/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, Platform, View, ScrollView, Text} from 'react-native';
import {styles} from './styles';
import React, {useEffect} from 'react';
import AppBar from './../../components/appBar';
import Slider from './../../components/slider';
import CategoryCard from './../../components/categoryCard';
import Title from './../../components/title';
import ProductCard from '../../components/prodcutCard';
import PathConstant from '../../navigation/PathConstant';
import {StackNavigationProp} from '@react-navigation/stack';
import {sliderImageList} from '../../constant';
import {useAppDispatch, useAppSelector} from '../../app/hook';
import {fetchCategory} from '../../features/categories/categorySlice';

interface IHomeProps {
  navigation: StackNavigationProp<any, any>;
}

const HomeScreen: React.FC<IHomeProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const categoryStates = useAppSelector(state => state.category);
  useEffect(() => {
    if (!categoryStates.data) {
      dispatch(fetchCategory());
    }
  }, [categoryStates.data, dispatch]);
  if (categoryStates.loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading...</Text>
      </View>
    );
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
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={{paddingBottom: 20}}>
            <Slider imageList={sliderImageList} />
            <Title title="Categories" />
            <View style={styles.gridAreaCategory}>
              {categoryStates.data &&
                categoryStates.data?.map(cat => (
                  <CategoryCard
                    key={cat._id}
                    title={cat.name}
                    onPress={() =>
                      navigation.navigate(PathConstant.CATEGORY_PRODUCT, {
                        categoryName: cat.name,
                      })
                    }
                  />
                ))}
              {categoryStates.error && <Text>{categoryStates.error}</Text>}
            </View>
            <Title title="Discount Products" />
            <View style={styles.gridArea}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
