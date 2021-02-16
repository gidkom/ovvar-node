import { IGenerateVoucher } from './interfaces';
declare class Voucher {
    private apiKey;
    testing: number;
    constructor(apiKey: string, testing?: number);
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
    generate(data: IGenerateVoucher): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Validate voucher
     * @param {string} pin - voucher pin
     * @return {Promise}
    */
    validate(pin: string | number): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Redeem voucher
     * @param {string} pin - voucher pin
     * @return {Promise}
    */
    redeem(pin: string | number): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Send Http Request
     * @param {string} endpoint - api endpoint
     * @param {object} data - payload
     * @return {Promise}
    */
    private _request;
}
export { Voucher };
