import {Text, View} from 'react-native';
import NotOrderComponent from './components/notOrder';
import React from 'react';
import {styles} from './styles';

const OrdersScreen: React.FC<{}> = () => {
  const haveOrder: boolean = true;
  return (
    <View style={styles.content}>
      {haveOrder ? <NotOrderComponent /> : <Text>orders</Text>}
    </View>
  );
};
export default OrdersScreen;
