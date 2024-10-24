import axios, { AxiosInstance } from 'axios';

const myURL = 'http://127.0.0.1:8000/';

const axiosInstance: AxiosInstance =axios.create({
  baseURL: myURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

export default axiosInstance;
