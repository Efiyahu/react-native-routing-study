import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import {API} from './client';

// check for connection
instance.interceptors.request.use(async req => {
  const isConnected = await NetInfo.fetch().then(state => state.isConnected);
  if (isConnected) return req;
});
instance.interceptors.response.use(null, error => {
  return Promise.reject(new Error(error.message));
});

export default API;
