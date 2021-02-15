export interface IGenerateVoucher {
    currency: string;
    value: number;
    channel: string;
    recipient_phone?: string;
    recipient_email?: string;
}
export interface IValidateVoucher {
    pin: string | number;
}
export interface IRedeemVoucher {
    pin: string | number;
}
export declare enum Currency {
    NGN = "NGN",
    GHS = "GHS",
    USD = "USD"
}
export declare enum Channel {
    SMS = "sms",
    EMAIL = "email"
}
