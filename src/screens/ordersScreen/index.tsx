import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import EmptyDataComponent from '../../components/emptyData';
import {ScrollView} from 'react-native-gesture-handler';
import OrderProductCard from './components/orderProductCard';

const OrdersScreen: React.FC<{}> = () => {
  const haveOrder: boolean = false;
  return (
    <View style={styles.content}>
      {haveOrder ? (
        <EmptyDataComponent
          title="You don't have an order yet"
          desc="You don't have an ongoing orders at this time"
        />
      ) : (
        <ScrollView>
          <OrderProductCard createdDate={''} totalPrice={0} />
        </ScrollView>
      )}
    </View>
  );
};
export default OrdersScreen;
