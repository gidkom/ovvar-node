"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const config_1 = require("./../config");
const request = axios_1.default.create({
    baseURL: config_1.baseUrl,
});
axios_1.default.defaults.adapter = require('axios/lib/adapters/http');
request.interceptors.request.use(req => {
    // console.log(` ${req.method} ${req.baseURL}${req.url}`);
    return req;
});
exports.default = request;
