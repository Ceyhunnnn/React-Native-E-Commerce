import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import Slider from '../../components/slider';
import {sliderImageList} from '../../constant';
import {styles} from './styles';
import {RootStackParamList} from '../../navigation/AppRoutes';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import Button from '../../components/button';

interface IProductDetail {
  navigation?: StackNavigationProp<RootStackParamList, 'productDetail'>;
  route?: RouteProp<RootStackParamList, 'productDetail'>;
}

const ProductDetailScreen: React.FC<IProductDetail> = ({route}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const productData = route?.params.detail;
  const downQuantity = () => {
    if (quantity !== 1) {
      setQuantity(prevState => prevState - 1);
    }
  };
  const upQuantity = () => {
    setQuantity(prevState => prevState + 1);
  };
  return (
    <View style={styles.container}>
      <Slider imageList={sliderImageList} customStyle={styles.sliderArea} />
      <View style={styles.productArea}>
        <Text style={styles.productName}>{productData?.name}</Text>
        <View style={styles.divider} />
        <Text style={styles.propsTitle}>Description</Text>
        <Text style={styles.desc}>{productData?.description}</Text>
        <Text style={styles.propsTitle}>Color</Text>
        <View style={styles.colorArea}>
          {productData?.colors.map(color => (
            <View
              key={color.id}
              style={[styles.colorBall, {backgroundColor: color.name}]}
            />
          ))}
        </View>
        <View style={styles.quantityArea}>
          <Text style={styles.quantityText}>Quantity</Text>
          <View style={styles.countArea}>
            <Pressable onPress={downQuantity}>
              <Text style={styles.countText}>-</Text>
            </Pressable>
            <Text style={styles.countText}>{quantity}</Text>
            <Pressable onPress={upQuantity}>
              <Text style={styles.countText}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.totalText}>total price</Text>
          <Text style={styles.price}>${productData?.price}</Text>
        </View>
        <Button title={'Add to Basket'} style={styles.button} />
      </View>
    </View>
  );
};
export default ProductDetailScreen;
