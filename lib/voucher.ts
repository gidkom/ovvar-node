import { IGenerateVoucher } from './interfaces';
import Request from './request';

class Voucher {
    request: Request;
    constructor(
        private apiKey: string) {
            this.request = new Request(apiKey);
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
    async generate(data:IGenerateVoucher): Promise<any> {
        let response;
        try {
            response = await this.request.makeRequest('POST', '/api/v1/vouchers/', data);
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
    async validate(pin: string|number): Promise<any>  {
        let response;
        try {
            response = await this.request.makeRequest('POST', '/api/v1/vouchers/validate_voucher/', {pin});
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
    async redeem(pin: string|number): Promise<any>  {
        let response;
        try {
            response = await this.request.makeRequest('POST', '/api/v1/vouchers/redeem/', {pin});
        } catch (error) {
            throw new Error(error.response.data.detail);
        }
        return response;
    }
}

export { Voucher }