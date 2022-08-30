import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const instance = axios.create({
  baseURL: BASE_URL,
});

const API = {
  getAllPosts: () => instance.get(`${BASE_URL}/posts`),
};

// check for connection
instance.interceptors.request.use(req => {
  const isConnected = NetInfo.fetch().then(state => state.isConnected);
  if (isConnected) return req;
});
instance.interceptors.response.use(null, error => {
  return Promise.reject(new Error(error.message));
});

export default API;
