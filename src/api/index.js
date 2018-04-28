import axios from 'axios';

const API = {
  user: {
    logIn(data) {
      return axios.post('http://5ae32aeb34b5970014d2edd6.mockapi.io/validate-ok', data);
    }
  }
};

export default API;