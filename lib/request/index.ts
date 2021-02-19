import axios, { Method } from 'axios';
import { baseUrl } from './../config';


export default class Request {
    request: any;

    constructor(private apiKey: string) {
        axios.defaults.adapter = require('axios/lib/adapters/http')
        this.request = axios.create({
            baseURL: baseUrl,
            headers: {
                'Authorization': `Api-Key ${this.apiKey}`
            }
        })
        this.request.interceptors.request.use(
            (req: any) => {
                // console.log(` ${req.method} ${req.baseURL}${req.url}`);
                return req;
            }
        );
    }

    async makeRequest(method: Method, url: string, data: any) {
        return await this.request({
            method,
            url,
            data
        });
    }

}








