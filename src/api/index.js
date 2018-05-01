import axios from 'axios';

const API = {
  user: {
    logIn(data) {
      return axios.post('https://mysterious-reef-29460.herokuapp.com/api/v1/validate', {
      	...data,
      	'content-type': 'application/json'
      });
    }
  }
};

export default API;