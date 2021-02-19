import { expect } from 'chai';
import * as dotenv from 'dotenv';
import * as nock from 'nock';
import {baseUrl} from '../lib/config';
import {Voucher} from '../lib/index';
import apiResponse from './response';

dotenv.config({
    path: `${__dirname}/../.env`
});

let voucher: Voucher;
const voucherPin = '12345678';
const redeemPin = '12345678';

// Voucher
describe('Voucher', () => {
    voucher  = new Voucher('cP0OsCgO.aXIKpPR8aw1FWwaNBbbkiNAEemGCFKl');

    describe('Generate', () => {
        before(() => {
            nock(`${baseUrl}`)
            .post('/api/v1/vouchers/')
            .reply(201, apiResponse.generate);
        });
        it('should generate voucher successfully', async () => {
            const resp = await voucher.generate({
                currency: 'USD',
                value: 1500,
                channel: 'phone',
                recipient_phone: '2349063072525' 
            });
            expect(resp.status).to.equal(201);
            expect(resp).to.have.property('data');
            expect(resp.data.success).be.true;       
            expect(resp.data.message).equals('Successfully created and sent voucher');         
        })
    });

    describe('Validate', () => {
        before(() => {
            nock(`${baseUrl}`)
            .post('/api/v1/vouchers/validate_voucher/')
            .reply(200, apiResponse.validate);
        });
        it('should validate voucher', async () => {
            const resp = await voucher.validate(voucherPin);
            
            expect(resp.status).to.equal(200);
            expect(resp.data.success).be.true;
            expect(resp).to.have.property('data');
            expect(resp.data.message).equals('Voucher is valid');         
        });
    });

    describe('Redeem', () => {
        before(() => {
            nock(`${baseUrl}`)
            .post('/api/v1/vouchers/redeem/')
            .reply(200, apiResponse.redeem);
        });

        it('should redeem voucher', async () => {
            const resp = await voucher.redeem(redeemPin);

            expect(resp.status).to.equal(200);
            expect(resp.data.success).be.true;
            expect(resp).to.have.property('data');        
        });
    });
});