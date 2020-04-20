
const stclient = require('./StratumClientConnect.js');


var Client = require('stratum').Client;
 
client = Client.create();
 
client.connect({
    host: 'connect.pool.bitcoin.com',
    port: 3333
}).then(function(value){
    if (value){
        //etc
       stratum.Server.implement({
    myOwnClassMethodObject: {
    }
});
 
stratum.Server.myOwnClassMethodObject;
 
stratum.Server.include({
    niftyFunction: function(isit){
       
var MyNewServer = stratum.Server.define('MyNewServer', {
    sendToIt: function(){
        
        
        server.listen().then(
    // first parameter is the "resolved" or "success"
    function(){
const client = require('stratum-client');
const Client = client({
  server: 'connect.pool.bitcoin.com',
  port: 3333,
  worker: "getschigetschi",
  password: "xXx999021010xXx",
  autoReconnectOnError: true,
  onConnect: () => console.log('Connected to server'),
  onClose: () => console.log('Connection closed'),
  onError: (error) => console.log('Error', error.message),
  onAuthorizeSuccess: () => console.log('Worker authorized'),
  onAuthorizeFail: () => console.log('WORKER FAILED TO AUTHORIZE OH NOOOOOO'),
  onNewDifficulty: (newDiff) => console.log('New difficulty', newDiff),
  onSubscribe: (subscribeData) => console.log('[Subscribe]', subscribeData),
  onNewMiningWork: (newWork) => console.log('[New Work]', newWork),
  onSubmitWorkSuccess: (error, result) => console.log("Yay! Our work was accepted!"),
  onSubmitWorkFail: (error, result) => console.log("Oh no! Our work was refused because: " + error),
});
      

 

 
// mining.error event is emitted when something is wrong, mining related
 
server.on('mining.error', function(){
 
});
 
// the stratum.Server also holds defaults for coins daemons
console.log(stratum.Server.daemons); // a list of pre-configured daemons in stratum.Server.daemons
 
// You can inject them into the server later on, using stratum.Daemon
 
//instantiates a bitcoin stratum.Daemon and places inside the server
server.addDaemon(stratum.Server.daemons.bitcoin);
 

});
      
    },
    // second parameter is the "rejected" or "fail",
    function(){
     
var rpc = stratum.RPCServer.create({
          'mode': 'tcp', // can be 'tcp', 'http', 'both' (can handle TCP and HTTP/Websockets on one port)
          'port': 5001,
          'host': 'https://ipfs.infura.io:5001/api/6c3cc2ec874b4e8e977bdcb0204f9220', // bind to
          'password': '96aa3613c2154457affa899da89a3650' // SHA256 hash of the password, no plain text!
        });
 
rpc.listen(); // listens on port 9999, binding to localhost
 
rpc.expose('mymethod', function(args, connection, callback){
    // if you want to pass an error, use the first callback parameter
    callback(error);
    // otherwise, pass the result through the second parameter
    callback(null, result);
});
 
// RPC calls like {"method":"mymethod","params":[1,"2"],"id":1}, the args parameter will receive only the [1,"2"]

      
      
    },
    // third parameter is the "progress", and it's not used anywhere in this module at the moment
    function(){
var client = stratum.Client.create();
 
client.on('mining.error', function(message){
});
 
client.on('mining', function(req, deferred){
    // this
});
 
client.connect(8080, 'localhost').then(function(socket){
    socket.stratumSubscribe('NodeMiner');
    socket.stratumAuthorize('getschigetschi','xXx999021010xXx');
    socket.stratumSubmit('worker', 'job_id', 'extranonce2', 'ntime', 'nonce');
    socket.stratumSend(data, true); //send a stratum command other than the previous ones
    socket.send(data); // send raw data through the socket


})
      
      
      
    
    
    