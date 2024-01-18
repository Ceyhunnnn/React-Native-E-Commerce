import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import Slider from '../../components/slider';
import {styles} from './styles';
import {RootStackParamList} from '../../navigation/AppRoutes';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import Button from '../../components/button';

interface IProductDetail {
  navigation?: StackNavigationProp<RootStackParamList, 'productDetail'>;
  route: RouteProp<RootStackParamList, 'productDetail'>;
}
interface IImageList {
  id: number;
  img: string;
}

const ProductDetailScreen: React.FC<IProductDetail> = ({route}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const productData = route?.params.detail;
  let discountTotal =
    productData.price - productData.price / productData?.discount;

  const downQuantity = () => {
    if (quantity !== 1) {
      setQuantity(prevState => prevState - 1);
    }
  };
  const upQuantity = () => {
    setQuantity(prevState => prevState + 1);
  };
  const imageList: IImageList[] = [
    {id: 0, img: productData.cover_photo},
    {id: 1, img: productData.cover_photo},
    {id: 2, img: productData.cover_photo},
  ];
  return (
    <View style={styles.container}>
      <Slider imageList={imageList} customStyle={styles.sliderArea} />
      <View style={styles.productArea}>
        <Text style={styles.productName}>{productData?.name}</Text>
        <View style={styles.divider} />
        <Text style={styles.propsTitle}>Description</Text>
        <Text style={styles.desc}>
          {productData?.description} Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </Text>
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
          <View style={styles.priceTextArea}>
            <Text
              numberOfLines={1}
              style={
                productData.discount > 0 ? styles.discount : styles.productPrice
              }>
              $ {productData.price}
            </Text>
            {productData.discount > 0 && (
              <Text numberOfLines={1} style={styles.productPrice}>
                $ {discountTotal.toFixed(0)}
              </Text>
            )}
          </View>
        </View>
        <Button title={'Add to Basket'} style={styles.button} />
      </View>
    </View>
  );
};
export default ProductDetailScreen;
