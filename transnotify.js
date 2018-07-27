const express = require('express');
const app = express();

var StellarSdk = require('stellar-sdk');
// environment variables
process.env.NODE_ENV = 'test';

const config = require('./config/config.js');
var server = new StellarSdk.Server(config.stellar.horizon_server);
var notifyAccount =config.stellar.account_id;


console.log("listening for transactions to address " + notifyAccount);
    
var txDetailsHandler = function(transactionResult, paymentResponse){
    if (transactionResult.memo_type == 'text'){
        var memo  = transactionResult.memo;
        var tagUserType = memo.substr(0,1);
        var tagUserId = memo.substr(1,memo.length);
        console.log('TAG User Type: ' + tagUserType);
        console.log('TAG UserID: ' + tagUserId);
        console.log('amount received: ' + paymentResponse.amount);
        console.log('asset type: ' + paymentResponse.asset_type);
        //TODO: insert your API call for Tagcash here
        
    }
    else{
        console.log('no memo included in this transaction.')
    }
    //console.log(transactionResult);
}
var paymentHandler = function (paymentResponse) {    

    console.log("new payment activity");        
    
    //get the transaction_id from links
    var startIndex = paymentResponse._links.transaction.href.lastIndexOf('/') + 1;
    var len = paymentResponse._links.transaction.href.length;
    var strCount = len - startIndex;
    var transId = paymentResponse._links.transaction.href.substr(startIndex, strCount);
    //get transaction details from transactionh_hash
    server.transactions()
        .transaction(paymentResponse.transaction_hash)
        .call()
        .then(function (transactionResult) {
            txDetailsHandler(transactionResult, paymentResponse);
        })
        .catch(function (err) {
            console.error(err);
        });
 
   }

 //monitor payment operations for an account   
var transStream = server.payments()
    .cursor('now')
    .forAccount(notifyAccount)
    .stream({
        onmessage: paymentHandler
});
    