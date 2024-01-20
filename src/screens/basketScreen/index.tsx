import {View, ScrollView, Text} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import BasketCard from '../../components/basketCard';
import Button from './../../components/button';
import {ArrowRightIcon} from '../../components/Icon';
import EmptyDataComponent from '../../components/emptyData';
import {getBasketData} from '../../modules/basket';

const BasketScreen: React.FC = () => {
  const haveProduct: boolean = true;
  useEffect(() => {
    getBasketData();
  }, []);
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={[styles.container, haveProduct ? {paddingBottom: 80} : {}]}>
      {haveProduct ? (
        <>
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
        </>
      ) : (
        <EmptyDataComponent
          title="You don't have an prodcut yet"
          desc="You don't have an ongoing product at this time"
        />
      )}
    </View>
  );
};
export default BasketScreen;
