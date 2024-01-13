import {View, ScrollView, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BasketCard from '../../components/basketCard';
import Button from './../../components/button';
import {ArrowRightIcon} from '../../components/Icon';

const BasketScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <BasketCard />
        <BasketCard />
      </ScrollView>
      <View style={styles.checkoutArea}>
        <View>
          <Text style={styles.totalText}>Total Price</Text>
          <Text style={styles.price}>$1,970.00</Text>
        </View>
        <Button
          title="Checkout"
          style={styles.button}
          iconRight={<ArrowRightIcon size={20} color="white" />}
        />
      </View>
    </View>
  );
};
export default BasketScreen;
