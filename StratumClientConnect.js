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