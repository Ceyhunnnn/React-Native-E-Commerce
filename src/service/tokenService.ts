import AsyncStorageService from './asyncStorage';

const accessTokenName = 'token';
const TokenService = {
  async setToken(value: string) {
    await AsyncStorageService.setStorage(accessTokenName, value);
  },
  getToken() {
    return AsyncStorageService.getStorage(accessTokenName);
  },
  async deleteToken() {
    return await AsyncStorageService.deleteStorage(accessTokenName);
  },
};

export default TokenService;
