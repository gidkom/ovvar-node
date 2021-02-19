# Ovvar

A NodeJS library to interact with ovvar API

&nbsp;
## Installation

`yarn add ovvar-node`

OR

`npm install ovvar-node`    


## Usage

### Authentication
Generate an API KEY from the <a href="https://app.ovvar.com" target="_blank">Ovvar dashboard</a>


### Setup

```
import { Voucher } from 'ovvar-node'

const voucher  = new Voucher(process.env.API_KEY);
```

### Generate a new voucher
Simply supply the needed parameters  
**currency**: USD | NGN  
**value**: amount value  
**channel**: email | sms
**quantity**: number of vouchers to generated  
**recipient_phone**: phone number to receive voucher pin  
**recipient email**: email to receive voucher pin 

```
const resp = await voucher.generate({
    currency: 'USD',
    value: 1500,
    channel: 'phone',
    recipient_phone: '2349063079039',
    quantity: 10
});
```

### Validate a voucher
Check if voucher is valid
```
const resp = await voucher.validate(voucherPin);
```


### Redeem a voucher
```
const resp = await voucher.redeem(voucherPin);

```