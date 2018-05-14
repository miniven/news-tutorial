import axios from 'axios';

const API = {
  user: {
    logIn(data) {
      return axios.post('https://mysterious-reef-29460.herokuapp.com/api/v1/validate', {
      	...data,
      	'content-type': 'application/json'
      });
    },
    getData(id) {
      return axios.get(`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${id}`);
    }
  },
  news: {
    getNews() {
      return axios.get('https://mysterious-reef-29460.herokuapp.com/api/v1/news');
    }
  }
};

export default API;