import {FlatList, RefreshControl, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import EmptyDataComponent from '../../components/emptyData';
import OrderProductCard from './components/orderProductCard';
import {IBasketData} from '../../types/basket';
import LoadingView from '../../components/loading';
import {getOrders} from '../../modules/order';
import {useIsFocused} from '@react-navigation/native';

interface IOrderData {
  createdAt: string;
  _id: string;
  orderList: IBasketData[];
}

const OrdersScreen: React.FC<{}> = () => {
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState<boolean>(true);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [orderData, setOrderData] = useState<IOrderData[]>([]);
  const getUserOrders = async () => {
    const data = await getOrders();
    setOrderData(data as unknown as IOrderData[]);
    setTimeout(() => {
      setRefresh(false);
    }, 1000);
  };
  const refreshEvent = async () => {
    setRefresh(true);
    await getUserOrders();
  };
  useEffect(() => {
    async function getUserOrdersData() {
      await getUserOrders();
    }
    getUserOrdersData();
    setLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  if (loading === true) {
    return <LoadingView />;
  }

  return (
    <View style={styles.content}>
      {orderData.length < 0 ? (
        <EmptyDataComponent
          title="You don't have an order yet"
          desc="You don't have an ongoing orders at this time"
        />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={() => refreshEvent()}
            />
          }
          data={orderData}
          renderItem={({item}) => (
            <OrderProductCard
              createdDate={item.createdAt}
              productList={item.orderList}
            />
          )}
          keyExtractor={item => item._id}
        />
      )}
    </View>
  );
};
export default OrdersScreen;
