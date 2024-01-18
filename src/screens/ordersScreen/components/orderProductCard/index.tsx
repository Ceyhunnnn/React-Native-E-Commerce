import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OrderProduct from '../orderProduct';

interface IOrderProductCard {
  createdDate: string;
  totalPrice: number;
}

const OrderProductCard: React.FC<IOrderProductCard> = () => {
  return (
    <View style={styles.orderCard}>
      <Text style={styles.fontWeight}>
        Created Date : <Text style={styles.fontNormal}> 06.11.2000</Text>
      </Text>
      <Text style={styles.fontWeight}>
        Total Price :<Text style={styles.fontNormal}> $ 1258.50</Text>
      </Text>
      <Text style={styles.fontWeight}>Products :</Text>
      <View>
        <OrderProduct productList={[]} />
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
