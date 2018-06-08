import axios from 'axios';

const API_URL = 'https://mysterious-reef-29460.herokuapp.com/api/v1';

const API = {
  user: {
    logIn(data) {
      return axios.post(`${API_URL}/validate`, {
      	...data,
      	'content-type': 'application/json'
      });
    },
    getData(id) {
      return axios.get(`${API_URL}/user-info/${id}`);
    }
  },
  news: {
    getNews() {
      return axios.get(`${API_URL}/news`);
    }
  }
};

export default API;