import axios from 'axios';

//adb reverse tcp:3333 tc:3333
const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;