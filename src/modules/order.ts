import {store} from '../app/store';
import apiCall from '../service/api';

export const getOrders = async () => {
  const userId = store.getState().user.data?._id;
  let data = '';
  const body = {
    userId: userId,
  };
  await apiCall('getOrder', {body: body, type: 'post'}).then(res => {
    if (res?.status === 200) {
      data = res.data.data;
    }
  });
  return data;
};
