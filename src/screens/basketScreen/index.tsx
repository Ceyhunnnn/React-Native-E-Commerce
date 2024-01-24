import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BasketCard from '../../components/basketCard';
import Button from './../../components/button';
import {ArrowRightIcon} from '../../components/Icon';
import EmptyDataComponent from '../../components/emptyData';
import {useAppSelector} from '../../app/hook';
import LoadingView from '../../components/loading';

const BasketScreen: React.FC = () => {
  const basketStates = useAppSelector(state => state.basket);
  if (basketStates.loading) {
    return <LoadingView />;
  }
  return (
    <View
      style={[
        styles.container,
        // eslint-disable-next-line react-native/no-inline-styles
        basketStates.data.length > 0 ? {paddingBottom: 80} : {},
      ]}>
      {basketStates.data.length > 0 ? (
        <>
          <FlatList
            data={basketStates.data}
            renderItem={({item}) => (
              <BasketCard
                name={item.name}
                price={item.price}
                image={item.cover_photo}
                item={item}
              />
            )}
          />
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
