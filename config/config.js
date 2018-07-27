// config.js
const env = process.env.NODE_ENV; // 'dev' or 'test'

const prod = {
    stellar: {
        horizon_server: 'https://horizon.stellar.org',
        account_id: 'GATGC7IEHN6SBRPTEGIACCWXB6VHGVA7UYZGOIBE4LFXRSKYCLWO5QH3'
    }
};

const test = {
    stellar: {
        horizon_server: 'https://horizon-testnet.stellar.org',
        account_id: 'GATGC7IEHN6SBRPTEGIACCWXB6VHGVA7UYZGOIBE4LFXRSKYCLWO5QH3'
    }
};

const config = {
 prod,
 test
};

module.exports = config[env];