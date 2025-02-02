import axios from 'axios';

const instance = axios.create({

  baseURL: 'http://192.168.1.6:5000/api', // Adjust according to your server address


});

export default instance;