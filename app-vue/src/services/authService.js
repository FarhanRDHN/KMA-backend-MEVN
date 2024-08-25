import axios from 'axios';


const API_URL = process.env.VUE_APP_API_AUTH;

export default {
  async loginAuth(credentials) {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  }
};
