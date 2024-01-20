import {store} from '../app/store';
import apiCall from '../service/api';

const userId = store.getState().user.data?._id;
export const getBasketData = async (): Promise<any> => {
  await apiCall(`getUserBasket/${userId}`, {type: 'get'}).then(res =>
    console.log(res?.data.data[0].basketList),
  );
};
