import {FlatList, View} from 'react-native';
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
  const [orderData, setOrderData] = useState<IOrderData[]>();
  const userId = useAppSelector(state => state.user.data?._id);
  useEffect(() => {
    async function getUserOrders() {
      const body = {
        userId: userId,
      };
      await apiCall('getOrder', {body: body, type: 'post'}).then(res => {
        if (res?.status === 200) {
          setOrderData(res?.data.data);
          setLoading(false);
        }
      });
    }
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
