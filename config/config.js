// config.js
const env = process.env.NODE_ENV; // 'dev' or 'test'

const prod = {
    stellar: {
        horizon_server: 'https://horizon.stellar.org',
        account_id: 'GATGC7IEHN6SBRPTEGIACCWXB6VHGVA7UYZGOIBE4LFXRSKYCLWO5QH3',
        secret_key: 'SAWVDGK4EKFZCUVYZPICXUMSUJ3KLDQ2FL4O6V6FQN535RMPKASKS4A3'        
    }
};

const test = {
    stellar: {
        horizon_server: 'https://horizon-testnet.stellar.org',
        account_id: 'GBXCFAOB5QIA5HHAVMBFJ4REZG2H3W3MDNQ6H5I4JMZVO4ITD6AETJIJ',
        secret_key: 'SAWVDGK4EKFZCUVYZPICXUMSUJ3KLDQ2FL4O6V6FQN535RMPKASKS4A3'
    }
};

const config = {
 prod,
 test
};

module.exports = config[env];