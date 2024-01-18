import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import EmptyDataComponent from '../../components/emptyData';

const OrdersScreen: React.FC<{}> = () => {
  const haveOrder: boolean = true;
  return (
    <View style={styles.content}>
      {haveOrder ? (
        <EmptyDataComponent
          title="You don't have an order yet"
          desc="You don't have an ongoing orders at this time"
        />
      ) : (
        <Text>orders</Text>
      )}
    </View>
  );
};
export default OrdersScreen;
