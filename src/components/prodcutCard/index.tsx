import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {HeartIcon} from '../Icon';

interface IProductCard {
  name: string;
  price: number;
  image: string;
  discount: number;
}
const ProductCard: React.FC<IProductCard> = ({
  name,
  price,
  image,
  discount,
}) => {
  let discountTotal = price - price / discount;

  return (
    <>
      <View style={styles.productCard}>
        <View style={styles.productBg}>
          <View style={styles.prodcutImageArea}>
            <Image style={styles.prodcutImage} source={{uri: image}} />
          </View>
          <View style={styles.heartIcon}>
            <HeartIcon size={23} color="black" />
          </View>
        </View>
        <View style={styles.textArea}>
          <Text numberOfLines={1} style={styles.productName}>
            {name}
          </Text>
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
        </View>
      </View>
    </>
  );
};
export default ProductCard;
