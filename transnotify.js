
const express = require('express');
const app = express();

var StellarSdk = require('stellar-sdk');
// environment variables
process.env.NODE_ENV = 'test';


const config = require('./config/config.js');
var server = new StellarSdk.Server(config.stellar.horizon_server);
var notifyAccount =config.stellar.account_id;



console.log("listening for transactions to address " + notifyAccount);
    
var txHandler = function (txResponse) {    

    console.log("new transaction activity");
    var memo  = txResponse.memo;
    var _type = memo.substr(0,1);
    var _id = memo.substr(1,memo.length);
    const fs = require('fs')

    console.log(_type);
    console.log(_id);
    let data = JSON.stringify({ user : {type: _type, id: _id} });
    
    fs.writeFile('user.json', data, (err) => {  
        if (err) throw err;
        console.log('Data written to file');
    });

    console.log('This is after the write call');  
}

var transStream = server.transactions()
    .cursor('now')
    .forAccount(notifyAccount)
    .stream({
        onmessage: txHandler
});
    

// app.get('/', (req, res) => {
//     console.log("listening for transactions to address " + notifyAccount);
    
//     var txHandler = function (txResponse) {    

//         console.log("new transaction activity");
//         var memo  = txResponse.memo;
//         var _type = memo.substr(0,1);
//         var _id = memo.substr(1,memo.length);
    
//         console.log(_type);
//         console.log(_id);
//         res.json(JSON.stringify({ user : {type: _type, id: _id} }));
    
//     }

//     var transStream = server.transactions()
//     .cursor('now')
//     .forAccount(notifyAccount)
//     .stream({
//         onmessage: txHandler
//     });
    
// });


// app.listen(3000);