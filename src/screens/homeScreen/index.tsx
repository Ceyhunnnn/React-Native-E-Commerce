/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, Platform, View, ScrollView} from 'react-native';
import {styles} from './styles';
import * as React from 'react';
import AppBar from './../../components/appBar';
import Slider from './../../components/slider';
import CategoryCard from './../../components/categoryCard';
import Title from './../../components/title';
import ProductCard from '../../components/prodcutCard';
import PathConstant from '../../navigation/PathConstant';
import {StackNavigationProp} from '@react-navigation/stack';
import {sliderImageList} from '../../constant';

interface IHomeProps {
  navigation: StackNavigationProp<any, any>;
}

const HomeScreen: React.FC<IHomeProps> = props => {
  const {navigation} = props;
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
            <View style={styles.gridArea}>
              <CategoryCard
                onPress={() =>
                  navigation.navigate(PathConstant.CATEGORY_PRODUCT, {
                    categoryName: 'Spor',
                  })
                }
              />
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
