import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const API = {
  getAllPosts: () => instance.get(`${BASE_URL}/posts`),
};
