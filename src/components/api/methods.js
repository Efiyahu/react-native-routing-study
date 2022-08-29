import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const API = {
  getAllPosts: () => axios.get(`${BASE_URL}/posts`),
};

export default API;
