import {store} from '../app/store';
import CustomAlert from '../components/alert';
import {fetchBasket} from '../features/basket/basketSlice';
import apiCall from '../service/api';
import {IBasketData} from '../types/basket';

export const addProductToBasket = async (basketData: IBasketData) => {
  const basketStates = store.getState().basket;
  const userId = store.getState().user.data?._id;
  if (
    !(basketStates.data.filter(item => item._id === basketData._id).length > 0)
  ) {
    await apiCall('addItemToBasket', {
      body: {userId: userId, item: basketData},
      type: 'post',
    }).then(async res => {
      if (res?.data.success) {
        CustomAlert({
          title: 'Adding Product to Basket',
          desc: 'Product added to basket',
        });
        await store.dispatch(fetchBasket(userId));
      }
    });
  } else {
    CustomAlert({
      title: 'Adding Product to Basket',
      desc: 'The product is already added to your basket',
    });
  }
};
export const deleteProductFromBasket = async (basketData: IBasketData) => {
  const userId = store.getState().user.data?._id;
  const body = {
    userId,
    deleteItem: basketData,
  };
  await apiCall('deleteBasketItem', {body, type: 'delete'}).then(res => {
    if (res?.status === 200) {
      store.dispatch(fetchBasket(userId));
    }
  });
};
