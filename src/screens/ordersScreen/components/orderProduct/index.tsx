import {Image, StyleSheet, Text, View} from 'react-native';
import {images} from '../../../../assets';
import React from 'react';

interface IOrderProductProps {
  productList: IProductList[];
}
interface IProductList {
  name: string;
  price: number;
  image: string;
}

const OrderProduct: React.FC<IOrderProductProps> = () => {
  return (
    <View style={styles.productArea}>
      <Image style={styles.productImg} source={images.product} />
      <View>
        <Text>Mobile Phone</Text>
        <Text>$ 1250.00</Text>
      </View>
    </View>
  );
};
export default OrderProduct;
const styles = StyleSheet.create({
  productArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 5,
  },
  productImg: {
    width: 50,
    height: 50,
  },
});
