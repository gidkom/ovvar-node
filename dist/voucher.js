"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voucher = void 0;
const request_1 = require("./request");
class Voucher {
    constructor(apiKey, testing = 0) {
        this.apiKey = apiKey;
        this.testing = testing;
    }
    /**
     * Generate voucher
     * @param {string} organization - organization id
     * @param {number} value - amount value
     * @param {string} channel - channel
     * @param {string} currency - currency
     * @param {string} [recipient_phone] - recipient phone
     * @param {string} [recipient_email] - recipient email
     * @return {Promise}
    */
    generate(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            try {
                //this.getOrganization()
                response = yield this._request('/vouchers/', data);
            }
            catch (error) {
                throw new Error(error.response.data.detail);
            }
            return response;
        });
    }
    /**
     * Validate voucher
     * @param {string} pin - voucher pin
     * @return {Promise}
    */
    validate(pin) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            try {
                response = yield this._request('/vouchers/validate_voucher/', { pin });
            }
            catch (error) {
                // console.log(error.response.data)
                throw new Error(error.response.data.detail);
            }
            return response;
        });
    }
    /**
     * Redeem voucher
     * @param {string} pin - voucher pin
     * @return {Promise}
    */
    redeem(pin) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            try {
                response = yield this._request('/vouchers/redeem/', { pin });
            }
            catch (error) {
                throw new Error(error.response.data.detail);
            }
            return response;
        });
    }
    /**
     * Send Http Request
     * @param {string} endpoint - api endpoint
     * @param {object} data - payload
     * @return {Promise}
    */
    _request(endpoint, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield request_1.default.post(endpoint, data, {
                headers: {
                    'Authorization': `Api-Key ${this.apiKey}`
                }
            });
        });
    }
}
exports.Voucher = Voucher;
