import axios from 'axios';
import TokenService from './tokenService';

const axiosClient = axios.create({
  baseURL: 'http://192.168.10.102:3001/api/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
axiosClient.interceptors.request.use(
  async config => {
    config.headers.Authorization = 'Bearer ' + (await TokenService.getToken());
    return config;
  },
  error => {
    Promise.reject(error);
  },
);
export default axiosClient;
