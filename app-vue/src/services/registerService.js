import axios from 'axios';


const API_URL = process.env.VUE_APP_API_AUTH;

export default {
  async register(credentials) {
    const response = await axios.post(`${API_URL}/register`, credentials);
    return response.data;
  }
};
