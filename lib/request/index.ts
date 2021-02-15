import axios from 'axios';
import { baseUrl } from './../config';

const request = axios.create({
    baseURL: baseUrl,
})
axios.defaults.adapter = require('axios/lib/adapters/http')

request.interceptors.request.use(
    req => {
        // console.log(` ${req.method} ${req.baseURL}${req.url}`);
        return req;
    }
);


export default request ;


