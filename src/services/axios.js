import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_BASE_ENDPOINT}/wecare`;

export const APP_ENVIRONMENT = 'development';
export const BASE_ENDPOINT = 'http://localhost:5000';

export default axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  withCredentials: true
});
