import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OrderProduct from '../orderProduct';
import {IBasketData} from '../../../../types/basket';

interface IOrderProductCard {
  createdDate: string;
  productList: IBasketData[];
}

const OrderProductCard: React.FC<IOrderProductCard> = ({
  createdDate,
  productList,
}) => {
  return (
    <View style={styles.orderCard}>
      <Text style={styles.fontWeight}>
        Created Date : <Text style={styles.fontNormal}>{createdDate}</Text>
      </Text>
      <Text style={styles.fontWeight}>Products :</Text>
      <View>
        <OrderProduct productList={productList} />
      </View>
    </View>
  );
};
export default OrderProductCard;

const styles = StyleSheet.create({
  fontWeight: {
    fontWeight: '600',
  },
  fontNormal: {
    fontWeight: '400',
  },
  orderCard: {
    marginHorizontal: 10,
    borderWidth: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderColor: '#bebebe',
    gap: 3,
    marginVertical: 10,
  },
});
