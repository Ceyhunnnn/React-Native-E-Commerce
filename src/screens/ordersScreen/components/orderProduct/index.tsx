import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IBasketData} from '../../../../types/basket';
import {FlatList} from 'react-native-gesture-handler';

interface IOrderProductProps {
  productList: IBasketData[];
}

const OrderProduct: React.FC<IOrderProductProps> = ({productList}) => {
  return (
    <FlatList
      data={productList}
      renderItem={({item}) => (
        <View style={styles.productArea}>
          <Image style={styles.productImg} source={{uri: item.cover_photo}} />
          <View>
            <Text>{item.name}</Text>
            <Text>$ {item.price}</Text>
          </View>
        </View>
      )}
      keyExtractor={item => item._id}
    />
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
