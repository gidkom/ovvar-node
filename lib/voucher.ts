import { IGenerateVoucher } from './interfaces';
import request from './request';

export class Voucher {
    constructor(
        private apiKey: string, 
        public testing = 0) {
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
    async generate(data:IGenerateVoucher) {
        let response;
        try {
            //this.getOrganization()
            response = await this._request('/vouchers/', data);
        } catch (error) {
            throw new Error(error.response.data.detail);
        }
        return response;
    }


    /**
     * Validate voucher
     * @param {string} pin - voucher pin
     * @return {Promise}
    */
    async validate(pin: string|number) {
        let response;
        try {
            response = await this._request('/vouchers/validate_voucher/', {pin});
        } catch (error) {
            // console.log(error.response.data)
            throw new Error(error.response.data.detail);
        }
        return response;
    }

    /**
     * Redeem voucher
     * @param {string} pin - voucher pin
     * @return {Promise}
    */
    async redeem(pin: string|number) {
        let response;
        try {
            response = await this._request('/vouchers/redeem/', {pin});
        } catch (error) {
            throw new Error(error.response.data.detail);
        }
        return response;
    }

    /**
     * Send Http Request
     * @param {string} endpoint - api endpoint
     * @param {object} data - payload
     * @return {Promise}
    */
    private async _request(endpoint: string, data: any) {
        return await request.post(endpoint, data, { 
                headers: { 
                    'Authorization': `Api-Key ${this.apiKey}`
                }
            }

        );
    }
    
}
