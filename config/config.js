// config.js
const env = process.env.NODE_ENV; // 'dev' or 'test'

const prod = {
    stellar: {
        horizon_server: 'https://horizon.stellar.org',
        account_id: 'GCPRLQQ564KOUEXFEFGODULAT2ME7SCTY5QE6RSGIATZVFQWFVNCDGOR'
    }
};

const test = {
    stellar: {
        horizon_server: 'https://horizon-testnet.stellar.org',
        account_id: 'GCPRLQQ564KOUEXFEFGODULAT2ME7SCTY5QE6RSGIATZVFQWFVNCDGOR'
    }
};

const config = {
 prod,
 test
};

module.exports = config[env];