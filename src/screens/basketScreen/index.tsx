import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import BasketCard from '../../components/basketCard';
import Button from './../../components/button';
import {ArrowRightIcon} from '../../components/Icon';
import EmptyDataComponent from '../../components/emptyData';
import {useAppSelector} from '../../app/hook';
import {IBasketData} from '../../types/basket';
import LoadingView from '../../components/loading';
import {useIsFocused} from '@react-navigation/native';
import {createOrder} from '../../modules/basket';

const BasketScreen: React.FC = () => {
  const isFocused = useIsFocused();
  const basketStates = useAppSelector(state => state.basket);
  const [basketData, setBasketData] = useState<IBasketData[]>(
    basketStates.data,
  );
  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    if (basketStates.data.length >= 1) {
      calculateTotalPrice();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basketData, isFocused]);

  useEffect(() => {
    setBasketData(basketStates.data);
  }, [basketStates.data, isFocused]);

  const calculateTotalPrice = () => {
    const total = basketData
      .map(basket => {
        return basket.quantity;
      })
      .reduce((a, b) => a + b, 0);
    setTotalPrice(total);
  };
  const productCountCalculate = (count: number, basketItem: IBasketData) => {
    let tempArray: IBasketData[] = [...basketData];
    const objIndex = tempArray.findIndex(obj => obj._id === basketItem._id);
    tempArray = tempArray.map((obj, index) => {
      if (index === objIndex) {
        if (obj.discount > 0) {
          return {
            ...obj,
            quantity:
              (basketItem.price -
                (basketItem.price * basketItem.discount) / 100) *
              count,
          };
        } else {
          return {
            ...obj,
            quantity: basketItem.price * count,
          };
        }
      }
      return obj;
    });
    setBasketData([...tempArray]);
  };
  if (basketStates.loading && basketStates.data.length <= 0) {
    return <LoadingView />;
  }
  return (
    <View
      style={[
        styles.container,
        // eslint-disable-next-line react-native/no-inline-styles
        basketData.length > 0 ? {paddingBottom: 80} : {},
      ]}>
      {basketData.length > 0 ? (
        <>
          <FlatList
            data={basketData}
            renderItem={({item}) => (
              <BasketCard
                name={item.name}
                price={item.price}
                image={item.cover_photo}
                item={item}
                productCountCalculate={productCountCalculate}
              />
            )}
          />
          <View style={styles.checkoutArea}>
            <View>
              <Text style={styles.totalText}>Total Price</Text>
              <Text style={styles.price}>$ {totalPrice.toFixed(2)}</Text>
            </View>
            <Button
              title="Buy"
              style={styles.button}
              onPress={() => createOrder(basketData, basketStates.id)}
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
