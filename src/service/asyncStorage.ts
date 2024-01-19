import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageService = {
  async setStorage(name: string, value: any) {
    await AsyncStorage.setItem(name, value);
  },
  async getStorage(name: string) {
    return await AsyncStorage.getItem(name);
  },
  async deleteStorage(name: string) {
    return await AsyncStorage.removeItem(name);
  },
  async deleteAllStorage() {
    return await AsyncStorage.clear();
  },
};
export default AsyncStorageService;
