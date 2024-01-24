import {FlatList, RefreshControl, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import EmptyDataComponent from '../../components/emptyData';
import OrderProductCard from './components/orderProductCard';
import apiCall from '../../service/api';
import {useAppSelector} from '../../app/hook';
import {IBasketData} from '../../types/basket';
import LoadingView from '../../components/loading';

interface IOrderData {
  createdAt: string;
  _id: string;
  orderList: IBasketData[];
}

const OrdersScreen: React.FC<{}> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [orderData, setOrderData] = useState<IOrderData[]>();
  const userId = useAppSelector(state => state.user.data?._id);
  const getUserOrders = async () => {
    const body = {
      userId: userId,
    };
    await apiCall('getOrder', {body: body, type: 'post'}).then(res => {
      if (res?.status === 200) {
        setOrderData(res?.data.data);
        setLoading(false);
        setTimeout(() => {
          setRefresh(false);
        }, 1000);
      }
    });
  };
  const refreshEvent = async () => {
    setRefresh(true);
    await getUserOrders();
  };
  useEffect(() => {
    getUserOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) {
    return <LoadingView />;
  }
  return (
    <View style={styles.content}>
      {!orderData ? (
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
