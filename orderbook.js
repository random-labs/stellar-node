var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

server.orderbook(new StellarSdk.Asset("EUR", "GCQPYGH4K57XBDENKKX55KDTWOTK5WDWRQOH2LHEDX3EKVIQRLMESGBG"), 
    new StellarSdk.Asset("USD", "GC23QF2HUE52AMXUFUH3AYJAXXGXXV2VHXYYR6EYXETPKDXZSAW67XO4"))
  .trades()
  .call()
  .then(function(resp) { console.log(resp); })
  .catch(function(err) { console.log(err); })