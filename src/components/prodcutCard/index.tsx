import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
// import Ionicons from '@expo/vector-icons/Ionicons';
import {images} from '../../assets';

const ProductCard: React.FC = () => {
  return (
    <>
      <View style={styles.productCard}>
        <View style={styles.productBg}>
          <View style={styles.prodcutImageArea}>
            <Image style={styles.prodcutImage} source={images.product} />
          </View>
          <View style={styles.heartIcon}>
            {/* <Ionicons name="ios-heart-outline" size={23} color="black" /> */}
          </View>
        </View>
        <View>
          <Text numberOfLines={1} style={styles.productName}>
            Apple Iphone 11 64 GB Red
          </Text>
          <Text numberOfLines={1} style={styles.productPrice}>
            $400
          </Text>
        </View>
      </View>
    </>
  );
};
export default ProductCard;
