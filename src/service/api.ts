import {Alert} from 'react-native';
import axiosClient from './axios';

interface IApiFunction {
  type: string;
  body?: any;
  message?: boolean;
  okButtonEvent?: () => void;
}

const apiCall = async (url: string, props: IApiFunction) => {
  const {type = 'get', body, message = false, okButtonEvent} = props;
  try {
    const response = await axiosClient.request({
      url,
      method: type,
      data: body,
    });
    return response;
  } catch (error) {
    if (message) {
      Alert.alert('Error', 'Api error, please try again', [
        {text: 'OK', onPress: okButtonEvent},
      ]);
    }
  }
};
export default apiCall;
