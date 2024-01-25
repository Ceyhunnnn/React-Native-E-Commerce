import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {HeartIcon} from '../Icon';

interface IProductCard {
  name: string;
  price: number;
  image: string;
  discount: number;
  onPress: () => void;
}
const ProductCard: React.FC<IProductCard> = ({
  name,
  price,
  image,
  discount,
  onPress,
}) => {
  let discountTotal = price - (price * discount) / 100;

  return (
    <>
      <View style={styles.productCard}>
        <View style={styles.productBg}>
          <Pressable style={styles.prodcutImageArea} onPress={onPress}>
            <Image style={styles.prodcutImage} source={{uri: image}} />
          </Pressable>
          <View style={styles.heartIcon}>
            <HeartIcon size={23} color="black" />
          </View>
        </View>
        <Pressable style={styles.textArea} onPress={onPress}>
          <Text numberOfLines={1}>{name}</Text>
          <View style={styles.priceTextArea}>
            <Text
              numberOfLines={1}
              style={discount > 0 ? styles.discount : styles.productPrice}>
              $ {price}
            </Text>
            {discount > 0 && (
              <Text numberOfLines={1} style={styles.productPrice}>
                $ {discountTotal.toFixed(0)}
              </Text>
            )}
          </View>
        </Pressable>
      </View>
    </>
  );
};
export default ProductCard;
