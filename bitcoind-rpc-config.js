var run = function() {
  var bitcore = require('bitcore');
  var RpcClient = require('bitcoind-rpc');
 
  var config = {
    protocol: 'http',
    user: 'getschigetschi',
    pass: '96aa3613c2154457affa899da89a3650',
    host: 'https://connect.pool.bitcoin.com:3333/',
    port: '5002',
  };
 
  // config can also be an url, e.g.:
  // var config = 'http://user:pass@127.0.0.1:18332';
 
  var rpc = new RpcClient(config);
 
  var txids = [];
 
  function showNewTransactions() {
    rpc.getRawMemPool(function (err, ret) {
      if (err) {
        console.error(err);
        return setTimeout(showNewTransactions, 10000);
      }
 
      function batchCall() {
        ret.result.forEach(function (txid) {
          if (txids.indexOf(txid) === -1) {
            rpc.getRawTransaction(txid);
          }
        });
      }
 
      rpc.batch(batchCall, function(err, rawtxs) {
        if (err) {
          console.error(err);
          return setTimeout(showNewTransactions, 10000);
        }
 
        rawtxs.map(function (rawtx) {
          var tx = new bitcore.Transaction(rawtx.result);
          console.log('\n\n\n' + tx.id + ':', tx.toObject());
        });
 
        txids = ret.result;
        setTimeout(showNewTransactions, 2500);
      });
    });
  }
 
  showNewTransactions();
};