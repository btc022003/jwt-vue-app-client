import axios from 'axios';
import { serverUrl } from '../utils/config';

const instance = axios.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  //
  const method = config.method.toUpperCase();
  if (method !== 'OPTIONS') {
    config.headers = { // eslint-disable-line
      ...config.headers,
      'X-CSRF-TOKEN': localStorage.csrf,
    };
  }
  console.log(config);
  return config;
});

instance.interceptors.response.use(null, (error) => {
  if (error.response && error.response.config && error.response.status === 401) {
    return axios.post(`${serverUrl}/refresh`, {}, {
      headers: { 'X-CSRF-TOKEN': localStorage.csrf, 'Content-Type': 'application/json' },
    }).then((res) => {
      localStorage.csrf = res.data.csrf;
    });
  }
});

export default instance;
