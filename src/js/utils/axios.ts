import _axios from "axios";
import { API_URL } from "../config/base";

const token = localStorage.getItem('token');

const axios = _axios.create({
  baseURL: API_URL,

  timeout: 3000,

  headers: {
    Authorization: token ? `Bearer ${localStorage.getItem('token')}` : '',
  },
});

export default axios;
