# Ovvar Voucher

A NodeJS library to interact with ovvar voucher API

&nbsp;
## Installation

`yarn add ovvar-voucher-node`

OR

`npm install ovvar-voucher-node`    


## Usage

### Authentication
Generate an API KEY from the [Ovvar dashboard](https://app.ovvar.com)


### Setup

```
import Voucher from 'ovvar-voucher-node'

const voucher  = new Voucher(process.env.API_KEY);
```

### Generate a new voucher
Simple supply the need parameters  
currency: USD | NGN  
value: amount value  
channel: email | sms  
recipient_phone: phone number to receive voucher pin  
recipient email: email to receive voucher pin 

```
const resp = await voucher.generate({
    currency: 'USD',
    value: 1500,
    channel: 'phone',
    recipient_phone: '2349063079039' 
});
```

### Validate a voucher
Check if voucher is valid
```
const resp = await voucher.validate(voucherPin);
```


### Redeem a voucher
```
const resp = await voucher.redeem(redeemPin);

```