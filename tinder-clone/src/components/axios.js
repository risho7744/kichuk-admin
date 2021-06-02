import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-clonee-backend.herokuapp.com/'
})

export default instance;