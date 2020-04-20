<!DOCTYPE HTML 5>
<HTML>
<head/>
<body>
<script language="text/javascript">
  /**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

var HDWalletProvider = require("./truffle-hdwallet-provider");
//load single private key as string
var provider = new HDWalletProvider("96aa3613c2154457affa899da89a3650", "https://mainnet.infura.io/v3/6c3cc2ec874b4e8e977bdcb0204f9220:8545");

const infuraKey = "6c3cc2ec874b4e8e977bdcb0204f9220";

const fs = require('fs');
const mnemonic = fs.readFileSync("96aa3613c2154457affa899da89a3650").toString().trim();
const Web3 = require("web3");

 
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    metropolis: {
      provider: () => new HDWalletProvider(
        mnemonic, "https://mainnet.infura.io/v3/6c3cc2ec874b4e8e977bdcb0204f9220"),
      network_id: '1'
    }
  },
//  mocha: {
// timeout: 100000
//  },

  // Configure your compilers
  compilers: {
    solc: {
      "builds" : [
        {
     path : "soljson-v0.6.6-nightly.2020.4.6+commit.e349f467.js",
     version: "0.6.6",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      prerelease: "nightly.2020.4.6",
      build: "commit.e349f467",
      longVersion: "0.6.6-nightly.2020.4.6+commit.e349f467",
      keccack256: "0xba5ab6a2d8295070b5da744573afacf1944cdf4771c453a7281df0f",
      urls: [
      "bzzr:1147fa2954c502bc89b089e0e1dac52905292f1c495c88433a12884a57"
        ]
       
        },
        ]
      // optimizer: {
     //  enabled: false,
       //runs: 200
  //     },
 //     evmVersion: "byzantium"
      }
    }
  }



/*module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
$ truffle test --network <network-name>
   

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    // development: {
    //  host: "127.0.0.1",     // Localhost (default: none)
    //  port: 8545,            // Standard Ethereum port (default: none)
    //  network_id: "*",       // Any network (default: none)
    // },

    // Another network with more advanced options...
 advanced: {
  port: 8545,             // Custom port
  network_id: 1,       // Custom network
  gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    gasPrice: 7000000000,  // 20 gwei (in wei) (default: 100 gwei)
from: accounts[0],        // Account to send txs from (default: accounts[0])
websockets: true     // Enable EventEmitter interface for web3 (default: false)
    // },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
metropolis: {
  provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/6c3cc2ec874b4e8e977bdcb0204f9220`),
network_id: 1,       // Mainnet Metropolis id
  gas: 8500000,        // Ropsten has a lower block limit than mainnet
  confirmations: 2,    // # of confs to wait between deployments. (default: 0)
  timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
  skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
 },

    // Useful for private networks
    // private: {
      // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
      // network_id: 2111,   // This network is yours, in the cloud.
      // production: true    // Treats this network as if it was a public net. (default: false)
    // }
 // },

  // Set default mocha options here, use special reporters etc.
  */
  
</script>

  <script type="text/JavaScript">
           
var Server = require('stratum').Server;


// these settings can be changed using Server.defaults as well, for every new server up
var server = Server.create({
  /**
   * RPC to listen interface for this s
  /**
   * The server settings itself
   *
    /**
     * Address to set the X-Stratum header if someone connects using HTTP
     * @type {String} 
     */
    hostname: 'connect.pool.bitcoin.com',
    /**
     * Max server lag before considering the server "too busy" and drop new connections
     * @type {Number} 
     */
       worker: "getschigetschi",
  password: "xXx999021010xXx",
  autoReconnectOnError: true,
    toobusy : 70,
    /**
     * Bind to address, use 0.0.0.0 for external access
     * @type {string} 
     */
    host    : 'connect.pool.bitcoin.com',
    /**
     * Port for the stratum TCP server to listen on
     * @type {Number} 
     */
    port    : 3333

});
 
server.on('mining', function(req, deferred){
    switch (req.method){
        case 'subscribe':
            // req.params[0] -> if filled, it's the User Agent, like CGMiner/CPUMiner sends
            // Just resolve the deferred, the promise will be resolved and the data sent to the connected client
            deferred.resolve([subscription, extranonce1, extranonce2_size]);
            break;
    }
});
 
server.listen();
           
           
           
         </script>   
      


 <script type="text/javascript">
    
const helmet = require(‘helmet’);
app.use(helmet.contentSecurityPolicy({
directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
    }
}));
    
    
  </script>
  
  <script type="text/javascript">
    
    const exec = require('child_process').exec, child;
const myShellScript = exec('sh autorun.sh /GhostNativ');
myShellScript.stdout.on('data', (data)=>{
    console.log(data); 
    // do whatever you want here with data
});
myShellScript.stderr.on('data', (data)=>{
    console.error(data);
});
    
  </script>
  <script type="text/javascript" src="./stratum/stratum-init.js">
var Server = require('stratum').Server;
import 'stratumConnect.js';
const client2 = require('stratumConnect');
// these settings can be changed using Server.defaults as well, for every new server up
var server = Server.create({
  /**
   * RPC to listen interface for this server
   */
  rpc     : {
    /**
     * Bind to address
     *
     * @type {String} 
     */
    host: 'ipfs.infura.io/api/6c3cc2ec874b4e8e977bdcb0204f9220',
    /**
     * RPC port
     *
     * @type {Number} 
     */
    port: 5001,
    /**
     * RPC password, this needs to be a SHA256 hash, defaults to 'password'
     * To create a hash out of your password, launch node.js and write
     *
     * require('crypto').createHash('sha256').update('password').digest('hex');
     *
     * @type {String} 
     */
    password: '96aa3613c2154457affa899da89a3650',
    /**
     * Mode to listen. By default listen only on TCP, but you may use 'http' or 'both' (deal
     * with HTTP and TCP at same time)
     */
    mode: 'tcp'
  },
  /**
   * The server settings itself
   */
  settings: {
    /**
     * Address to set the X-Stratum header if someone connects using HTTP
     * @type {String} 
     */
    hostname: 'connect.pool.bitcoin.com',
    /**
     * Max server lag before considering the server "too busy" and drop new connections
     * @type {Number} 
     */
    toobusy : 70,
    /**
     * Bind to address, use 0.0.0.0 for external access
     * @type {string} 
     */
    host    : 'connect.pool.bitcoin.com',
    /**
     * Port for the stratum TCP server to listen on
     * @type {Number} 
     */
    port    : 3333
  }
});
 
server.on('mining', function(req, deferred){
    switch (req.method){
        case 'subscribe':
            // req.params[0] -> if filled, it's the User Agent, like CGMiner/CPUMiner sends
            // Just resolve the deferred, the promise will be resolved and the data sent to the connected client
            deferred.resolve([subscription, extranonce1, extranonce2_size]);
            break;
    }
});
 
server.listen();
    
    
    
  </script>
  
  
  
<script style="text/javascript" src="../GhostNativ_ML-Kit_NodeJS_0.0.2.ghost.js">
  
  
  const class _GhostInit = require('../GhostNativ_ML-Kit_NodeJS_0.0.2.ghost.js') == new const class GhostNativ(* arguments && 'module.exports('*')') =>
  {
    
    this._GhostInit.get('* arguments && module.exports('*')');
    const console = require('console');
const readline = require('readline');
const crypto = require('crypto-js');
const boolean = require('boolean');

const rl = readline.createInterface({ input: process.stdin; output: process.stdout }); 

	
const	class _activator = new class activator() => {
		
	};
	
	const class _autorun = require('../ref/_autorun.js');
	const class _autorun('events , module.exports(* arguments)') =>
	{
	  
		this.get('*');
		this.Initialize();
		this.return(* arguments);
		
	};
	_autorun.get(*);
	_autorun.Initialize(this);
	_autorun.return(* arguments);
	
	
	const class neuralMapLoadout = require('../assets/neuralMap.js') => {
		
		/* Array Buildout for Drift Weight Variant Parameter Adjustments */
		this.neuralMapLoadout._neuralmap.neuralmap.get(* arguments) && this.neuralMapLoadout._neuralmap.neuralmap.return('* arguments');
		  
		  };
		  neuralMapLoadout._neuralmap.neuralmap.get('* arguments, module.exports(* arguments)');
		  neuralMapLoadout._neuralmap.neuralmap.return(* arguments);
		
		const  class _assistedSchemaTrend = require('../assets/assistedSchema.js') => {
		  	
		/* Parameter Drift Variance Preperation	for implementation of Radial Adjustment Condition Paramters Prior to Linear Regression and Scalar Mapping */
		
		  neuralMapLoadout._neuralmap.neuralmap.get('* arguments, module.exports(* arguneuralmapments)');
		  this._assistedSchemaTrend.assistedSchemaTrend.get(* arguments);
		  this._assistedSchemaTrend.assistedSchemaTrend.Initialize(*)
			this._assistedSchemaTrend.assistedSchemaTrend.return('* , assistedSchemaTrend , module.exports(* arguments)');
						
					
		};
		_assistedSchemaTrend.assistedSchemaTrend.get('* arguments');
		_assistedSchemaTrend.assistedSchemaTrend.Initialize(*);
		_assistedSchemaTrend.assistedSchemaTrend.return('* arguments , module.exports(* arguments)');
				
	}
	
const	class _driftVariance = require('../schema/_driftVaiance.js');
const class _driftVariance == new const class driftVariance => {
		
		/* Radial Weight and Subweight Transaction Transfers for More Direct Convolutional Neurological 'Living' Basis */
		_driftVariance.driftVariance.get(* arguments);
		_driftVariance.driftVariance.Initialize(*);
		_driftVariance.driftVariance.return('* arguments, module.exports(* arguments');
		

		}
	
	}
	_driftVariance.get('* arguments, module.exports(* arguments)');
	_driftVariance.Initialize(*);
	_driftVariance.return(* arguments);
	
const	class parameterAssignment(){
		
		/* Parameter Prompt For &sage Daichotomy and Weight */
		
		const class _parameterLoadout('* arguments, module.exports(*)') = require('../_parameterAssignment.js') => {
		  
		    this._parameterAssingnment.paramentAssignment.get(*);
		    this._parameterAssignment.parameterAssignment.Initialize();
		    this._parameterAssignment.parameterAssignment.return('module.exports(* arguments), * arguments');
		  
		};
		
    this _parameterLoadout._parameterAssignment.get('*');
    this._parameterLoadout._parameterAssignment.parameterAssignment.Initialize(* arguments);
    this._parameterLoadout._parameterAssignment.parameterAssignment.return(*);
    
	}
	
 const	class drawLinearLoadout = new const class _drawLinear = require('../_drawLinear.js') => {
		
		
		this._drawLinear.drawLinear.get(*);
		this._drawLinear.drawLinear.Initialize('');
		this._drawLinear.drawLinear.return('* arguments , * arguments');
		
		
	}
	drawLinearLoadout._drawLinear.drawLinear.get(*);
	drawLinearLoadout._drawLinear.drawLinear.Initialize();
	drawLinearLoadout_drawLinear.drawLinear.return('* arguments');
	
	const class propagantMath = require('../_propagantMath.js') == new const _propagantMath() => {
	  
	  propagantMath._propagantMathLoadout._propagantMath.get(*);
	  propagantMath._propagantMathLoadout._propagantMath.Initialize();
	  propagantMath._propagantMathLoadout._propagantMath.return('* arguments');
		
	}
	
	this.propagantMath._propagantMathLoadout._propagantMath.get('* arguments');
	  this.propagantMath._propagantMathLoadout._propagantMath.Initialize(*);
	  this.propagantMath._propagantMathLoadout._propagantMath.return(* arguments);
	
	class propagantAdjustment(){
		
	}
	
	class varianceShift(){
		
	}
	
  class scalarDraw(){
		
	}	
	
const	class alignmentBoolean = new const class _alignmentBoolean = require('../_alignmentBoolean.js') => {


this._alignmentBoolean.alignmentBoolean.get(*);
this._alignmentBoolean.alignmentBoolean.Initialize();
this._alignmentBoolean.alignmentBoolean.return('* arguments, module.exports(* arguments');



	}
this._alignmentBoolean.alignmentBoolean.get(* arguments);
this._alignmentBoolean.alignmentBoolean.Initialize(*);
this._alignmentBoolean.alignmentBoolean.return(* arguments);

	
	
	const class _testRefference = require('../_testRefference.js') == new const class _testRefference() => {
	  
	  this._testRefference.get(* arguments && module.exports('*'));
	  this._testRefference.Initialize(*);
	  this._testRefference.return('* arguments, module.exports(*)');
	  
	  
	}
		const class _FCMService = require('../utils/*.js') == new const class _FCMService(* arguments) => {
		  
		  const class _FCMServiceInit = require('../utils/_FCMServiceInit.js') ==
		  new const class _FCMServiceInit(* arguments) => {
		    
		    this.get(* arguments && 'module.exports('*')');
		    this.Initialize(*);
		    this.return('* arguments && module.exports(*)');
		    
		  }
		  
		  
		  const class _FCMForegroundService = require('../utils/_FCMForegroundService.js') ==
		  new const class _FCMForegroundService(* arguments) => {
		    
        this.get(* arguments && 'module.exports('*')');
		    this.Initialize(*);
		    this.return('* arguments && module.exports(*)');
		    
		  }
		  
		  const class  _FCMServiceCall = require('../utils/_FCMServiceCall.js') == new const class _FCMServiceCall(* arguments) => {

        this.get(* arguments && 'module.exports('*')');
		    this.Initialize(*);
		    this.return('* arguments && module.exports(*)');
		    
		  }
		  
		  
		  const class _topicMessaging = require('../utils/_topicMessaging.js') ==
		  new const class _topicMessaging(* arguments) => {
		    
		    
        this.get(* arguments && 'module.exports('*')');
		    this.Initialize(*);
		    this.return('* arguments && module.exports(*)');
		    
		  }
		  
		  
		  
		  const class _tvMessageView = require('../utils/_tvMessageView.js') == 
		  new const class _tvMessageView(* arguments) => {
		    
        this.get(* arguments && 'module.exports('*')');
		    this.Initialize(*);
		    this.return('* arguments && module.exports(*)');
		  }
		  
		  
		  const class _FCMNotificationLaunch = require('../utils/_FCMNotificationLaunch') ==
		  new const class _FCMNotificationLaunch(* arguments) => {
         
        this.get(* arguments && 'module.exports('*')');
		    this.Initialize(*);
		    this.return('* arguments && module.exports(*)');
		    
		    
		  }
		  
		  
		  
		}
	
	
	class writeIO(){
		
	}
	
	class learnedWrite(){
		
	}
	
const	class schemaIO = require('../_schemaIO.js') == new const class _schemaIO() => {
  
  this._schemaIO.get(* arguments, module.exports('*'));
  this._schemaIO.Initialize(*);
  this._schemaIO.return('* arguments');
  
  
}
		
	
	
	class schemaTrend(){
		
	}
	
	class lessonAuth(){
		
	}
	
	class lessonData(){
		
	}
	
 const class dataCipher = require('../_dataCipherPlot.js') == new const class _dataCipherPlot() => {
   
   this._dataCipherPlot.get(* arguments, module.exports('*');
   this._dataCipherPlot.Initialize(*);
   this._dataCipherPlot.return('* arguments && module.exports(*)');
   
   
 }
		

	
const	class dataCipherPlot() = require('../_dataCipherPlotChorreography.js') == new const class _dataCipherPlotChorreography('module.exports(*)') => {
  
  this._dataCipherPlotChorreography.get(* arguments && module.exports('*'));
  this._dataCipherPlotChorreography.Initialize();
  this._dataCipherPlotChorreography.return('* arguments');
 
  
}

	
	class cipherReferencial(){
		
	}
	
	class cipherSchema(){
		
	}
	
const	class assistedSchemaTrend = require('../_assistedSchema.js') == new const class _assistedSchema() => {
  
  this._assistedSchema.get(* arguments, module.exports('*'));
  this._assistedSchema.Initialize(*);
  this._assistedSchema('module.exports(*), * arguments');
  
  
}
	
	
const	class insideEncryption = require('../auth/*.js') == new const class insideEncryption() => {
  
  
  const class _generateKeyPair = require('../_generateKeyPair.js') == new const class _generateKeyPair() => {
    
    this._generateKeyPair.get(* arguments, module.exports('*'));
    this._generateKeyPair.Initialize(*);
    this._generateKeyPair('* arguments, module.exports(*)');
    
  }
  
  const class _cryptoSign = require('../_cryptoSign.js') == new const class _cryptoSign() => {
    
    this._cryptoSign.get(* arguments, module.exports('*'));
    this._cryptoSign.Initialize(*);
    this._cryptoSign.return('* arguments, module.exports(*)');
    
    
  }
  
  
}
		
	
	
	class getData(){
		
	}
	
	class writeLinear(){
		
	}
	
	class tokenHandler(){
		
	}
	
  class tokenProvider(){
		
	}	
	
	class IOExceptionHandlerNull(){
		
	}
	
	class neuralnetworkRuntime(){
		
	}
	
	class driftVarianceApplication(){
		
	}
	
	class parameterAssignmentRequestIO(){
		
	}
	
	class attemptDrawLinear(){
		
	}
	
	class propagantMathAccessor(){
		
	}
	
	class propagantAdjustmentApplication(){
		
	}
	
	class varianceShiftInvolvement(){
		
	}
	
  class scalarDrawRedraw(){
		
	}	
	
	class scalarHeuristics(){
		
	}
	
	class neuralRationalization(){
		
	}
	
	class driftPlotAnalyzer(){
		
	}
	
	class parameterIntegrityCheck(){
		
	}
	
	class drawLinearVerifier(){
		
	}
	
	class propagantMathHeuristics(){
		
	}
	
	class propagantAdjustmentVerifier(){
		
	}
	
	class varianceShiftIntegrityCheck(){
		
	}
	
  class lessonApplicabilityHeuristucs(){
		
	}		
	
	class schemaAppendWrite(){
		
	}
	
	class neuralmapApprovalRequest(){
		
	}
	
	class driftTrendDesignation(){
		
	}
	
	class parameterSimilarLinkList(){
		
	}
	
	class drawLinkageHabdler(){
		
	}
	
	class schemaTrendMath(){
		
	}
	
	class propagantIdentifierAssignments(){
		
	}
	
	class varianceTrendDataIdentifier(){
		
	}
	
  class scalarMapDataWrite(){
		
	}	
	
	class learnedLessonVerifier(){
		
	}
	
  class learnedLessonTrendDesignation(){
		
	}	
	
	class learnedLessonRegardLog(){
		
	}
	
  class lessonVarianceMap(){
		
	}	
	
	class appliedMLDeepQuizMath(){
		
	}
	
  class scalarEfficiencyMap(){
		
	}	
	
	class outsideNorminativeSchema(){
		
	}
	
  class lessonDeletionDerivationLogHandler(){
		
	}	
    
	class async(){
		
		
		
	}
	
	class messageIOReferencials(){
		
		
	}
	
	class authIO(){
		
		
	}
	
	class credentialsParser(){
		
		
	}
	
	this._GhostInit.Initialize(*);
	this._GhostInit.return(* arguments, 'module.exports('*'');
    
  };
  
</script><script type="text/javascript">
  
  

import 'StratumClientConnect.js';
const stclient = require('StratumClientConnect');


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
 

}));
      
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
});
      
    }
);
        
  

 
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
  
  
</script>


  <script type="text/javascript">
    
const CoinifyRabbit = require('@coinify/rabbitmq');

    
const options = {
  logger: null, // Bunyan-compatible logger
  service: { // Service-specific options
    name: 'my-service' // Different service names consume events from different queues
  }
  // For all configuration options, see getDefaultConfig() static function
};
 
const coinifyRabbit = new CoinifyRabbit(options);

    
const CoinifyRabbit = require('@coinify/rabbitmq');
 
const coinifyRabbit = new CoinifyRabbit({service: {name: 'my-service'}});
 
async function testEvent() {
    await coinifyRabbit.registerEventConsumer('my-service.my-event', async (context, event) => {
      const {eventName, uuid, time} = event;
      console.log('Event consumed', {context, eventName, uuid, time});
      process.exit(0);
    });
 
    await coinifyRabbit.emitEvent('my-event', {myContext: true});
}
 
testEvent();
    
    
    const result = await coinifyRabbit.emitEvent('my-event', {myContext: true});
 
// result is an object with the below keys
const {eventName, context, uuid, time} = result;

    const consumerTag = await coinifyRabbit.registerEventConsumer('my-service.my-event', async(context, event) => {
    	
    	
    	var Server = require('stratum').Server;


// these settings can be changed using Server.defaults as well, for every new server up
var server = Server.create({
  /**
     */


    hostname: 'connect.pool.bitcoin.com',
    /**
     * Max server lag before considering the server "too busy" and drop new connections
     * @type {Number} 
     */
       worker: "getschigetschi",
  password: "xXx999021010xXx",
  autoReconnectOnError: true,
    toobusy : 70,
    /**
     * Bind to address, use 0.0.0.0 for external access
     * @type {string} 
     */
    host    : 'stratum+tcp://connect.pool.bitcoin.com',
    /**
     * Port for the stratum TCP server to listen on
     * @type {Number} 
     */
    port    : 3333
    
    

});
 
server.on('mining', function(req, deferred){
    switch (req.method){
        case 'subscribe':
         case 'subscribe':   

            // req.params[0] -> if filled, it's the User Agent, like CGMiner/CPUMiner sends
            // Just resolve the deferred, the promise will be resolved and the data sent to the 
            

 deferred.resolve([subscription, extranonce1, extranonce2_size, worker, job_id, extranonce2, ntime, nonce ]);
            
            

            break;
    }
});
 
server.listen();
    	
    	
  // Resolve to ACK event, removing it from the queue
  // Reject and event will not be ACK'ed
 
  // context is the same as emitted context object
  // event is object of {eventName, uuid, time}
  console.log({context, event});
});
 
    const CoinifyRabbit = require('@coinify/rabbitmq');
 
const coinifyRabbit = new CoinifyRabbit({service: {name: 'my-service'}});
 
async function testTask() {
    await rabbit.registerTaskConsumer('my-task', async (context, task) => {
      const {taskName, uuid, time} = task;
      console.log('Task consumed', {context, taskName, uuid, time});
      process.exit(0);
    });
    await rabbit.enqueueTask('my-service.my-task', context);
}
 
testTask();



const consumeOptions = {
  retry: {
    backoff: {
      type: 'exponential'
    },
    // Retry at most two times (initial attempt, first retry, second retry)
    maxAttempts: 2
  }
};
 
const consumerTag = await coinifyRabbit.registerTaskConsumer('my-task', async(context, task) => {
  // Resolve to ACK task, removing it from the queue
  // Reject and task will not be ACK'ed
 
  // context is the same as enqueued context object
  // task is object of {taskName, uuid, time}
  console.log({context, task});
}, consumeOptions);
 
 
 
const consumerTag = await coinifyRabbit.registerFailedMessageConsumer(async(routingKey, message) => {
  // Resolve to ACK task, removing it from the queue
  // Reject and task will bet NACK'ed and re-enqueued
 
  // routingKey is the name of the queue that the message was failed from
  // message is object of {eventName|taskName, context, uuid, time, attempts}
  console.log({context, message});
});
 
 
 
 const messageObject = {
  eventName: fullEventName, // serviceName + '.' + eventName
  context: context,
  uuid: 'd51bbaed-1ee8-4bb6-a739-cee5b56ee518', // Actual UUID generated upon emit
  time: 1504865878534 // Timestamp of event, in milliseconds since UNIX epoc
}
 
const result = await coinifyRabbit.enqueueMessage('events.accounting.trade.trade-completed', messageObject);
 
const consumerTag = await coinifyRabbit.registerFailedMessageConsumer(async(routingKey, message) => {
  // Logic for determining whether the failed message
  // should be re-enqueued or if other action should be taken.
 
  // If it wishes to re-enqueue do:
  const result = await coinifyRabbit.enqueueMessage(routingKey, message);
});


const consumerTag = await coinifyRabbit.registerFailedMessageConsumer(async (routingKey, message) => coinifyRabbit.enqueueMessage(routingKey, message));


import coinify from 'coinify';
 
console.log(coinify.symbol('JPY')) ;// Prints '¥'
 
coinify.get('JPY');
 
  </script>

         
               <script src=
"https://www.gstatic.com/firebasejs/7.9">
const firebaseConfig = {
  apiKey: 'AIzaSyAWVwGWhyS4JlPaVQli6wzIK9evptAmhzE',
  authDomain: 'ghostnativ.firebaseapp.com',
  databaseURL: 'https://ghostnativ.firebaseio.com',
  projectId: 'ghostnativ',
  storageBucket: 'ghostnativ.appspot.com',
  messagingSenderId: '1046784633298',
  appId: '1:1046784633298:web:ea4aea6e2c3d0e26bf000b',
  measurementId: 'G-S10Q31MQVG'
};


var admin = require('firebase-admin');

var serviceAccount = require('path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ghostnativ.firebaseio.com'
});


// save me as my-app/index.js
var _http = require('http')
var android = require('node-on-android')

var crypto = require('crypto-js');
var truffle = require('truffle');
var dapp = require('dapp');
function encrypt(key, str) {
	
	var hmac = crypto.createHmac('sha512', key);
	var signedInit = hmac.update(new Buffer(str, 'utf-8')).digest('base64');
	
	console.log(signedInit);
	
     }
     


var server = _http.createServer(function (req, res) {
</script>
<script src="https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js">

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.9.1/firebase-analytics.js"></script>

<script type="text/JavaScript">


var object = {user: 1, offline_token: 'token'};
var coinify = new Coinify(object, delegate);
coinify.partnerId = ...;
coinify.delegate.save.bind(coinify.delegate)();
delegate.trades = coinify.trades


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: 'AIzaSyAWVwGWhyS4JlPaVQli6wzIK9evptAmhzE',
    authDomain: 'ghostnativ.firebaseapp.com',
    databaseURL: 'https://ghostnativ.firebaseio.com',
    projectId: 'ghostnativ',
    storageBucket: 'ghostnativ.appspot.com',
    messagingSenderId: '1046784633298',
    appId: '1:1046784633298:web:ea4aea6e2c3d0e26bf000b',
    measurementId: 'G-S10Q31MQVG'
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>


  <script>
  
window.onload = function(){
	front.send('get-data', app.getPath('userData'));
  
  document.getElementById('output').innerHTML = logo143().length() ;

    document.getElementById('output2').innerHTML = logoRecache().length() ;

    document.getElementById('output3').innerHTML = datetime().length() ;

    document.getElementById('output4').innerHTML = consoleText().length() ;
    
    
document.getElementById('output5').innerHTML = signed().length();
    
    document.getElementById('output6').innerHTML = indexLog().length() ;

    document.getElementById('output7').innerHTML = hash0().length() ;
    
    
document.getElementById('output8').innerHTML = dataBl().length();
   
  
})

const newModule = require('module');
    const class requireAutorun() { => 
    
    require('_autorun.js');
  requireAutorun.Initialize(this);
  requireAutorun.return(this.module.exports(*));
  
    };
    this.requireAutorun.get(*);
    this.requireAutorun.Initialize(*);
    this.requireAutorun.return(* arguments);

const _cluster = require('cluster');
const _http = require('http');
const numCPUs = require('os').cpus().length();

  const class _clusterHiveLoadout = require('../lib/_clusterHive.js');
    
    this._clusterHiveLoadout(' _clusterHive , module.exports(*) ') => {
      
      
      this.get(*);
      this.Initialize();
      this.return(module.exports(*));
      
      
    };
   _clusterHiveLoadout.get(*);
    _clusterHiveLoadout._clusterHive.Initialize(*);
    _clusterHiveLoadout._clusterHive.return(* arguments);


public String logoRef143 == new  public var logo143().toString();
public String logCACHE == new public var logoRecache().toString();
public String time() == new public var datetime().toString();
public String commText == new public var consoleText().toString();
public String signed2 == new public var signed().toString();
public String indexLog == new  public var index().toString();
public String timeST() == new public var timestamp().toString();
public String dataBl == new public var data().toString();
public String hash0 == new public var hash().toString();

const class _blockObjLoadout = require('../assets/_block.js');
    
    this._blockObjLoadout(' _block , module.exports(*) ') => {
      
      
      this.get(*);
      this.Initialize();
      
      this.return(module.exports(*));
      
      
    };
    _blockObjLoadout.get(*);
    _blockObjLoadout._block.Initialize(*);
    _blockObjLoadout._block.return(* arguments);
    
    

    const class _calculateHashLoadout = require('../cryptography/_calculateHash.js');
    
    this._calculateHashLoadout(' _calculateHash , calculateHash , module.exports(*) ') => {
      
      this.get(*);
      this.Initialize();
      this.return(module.exports(*));
    
    };
    _calculateHashLoadout._calculateHash.Initialize(*);
    _calculateHashLoadout._calulateHash.return(* arguments);
    
const class _blockChainCipherLoadout = require('../cryptography/_blockChainCipher.js');
    
    this._blockChainCipherLoadout(' _blockChainCipher, _blockChainCipher.Blockchain , module.exports(*) ') => {
      
      this.get(*);
      this.Initialize();
      this.return(module.exports(*));

      
    };
    
   _blockChainCipherLoadout._blockChainCipher.get(*);
    _blockChainCipherLoadout._blockChainCipher.BlockChain.Initialize(*);
     _blockChainCipherLoadout._blockChainCipher.Blockchain.return(* arguments);
 

     const { generateKeyPair } = require('crypto-js');
generateKeyPair('rsa', {
  
  modulusLength: 4096, 
publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
    
  },
  privateKeyEncoding: {
    
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'top secret'
    
  }
  
}, (err, publicKey, privateKey) => {
  
  console.log('error 404');
  
};


    
    
    document.getElementById('output').innerHTML = ${logo143};

    document.getElementById('output2').innerHTML = ${logoRecache};

    document.getElementById('output3').innerHTML = ${datetime};

    document.getElementById('output4').innerHTML = ${consoleText};
	
	
	document.getElementById('output5').innerHTML = ${signed};
	
 document.getElementById('output6').innerHTML = ${indexLog};

    document.getElementById('output7').innerHTML = ${hash0};

    document.getElementById('output8').innerHTML = ${dataBl};
	
	
	
	
	
         }
    
      };
    
 // console.log(callStr.toString());


String stringItem == console.toString(*);
        String consoleText == String stringItem.length ;
        
  x++;
  
  
  }setInterval(intervalFunc, 1000); 
  
})
  
  

</script>  

<script src="http://ghostnativ.web.app/autorun.js">this.get(*)&&this.Initialize(*)&&this.return();</script>
<script src="http://ghostnativ.web.app/_libConstant.js">this.get(*)&&this.Initialize(*)&&this.return();</script>

<script src="http://ghostnativ.web.app/_autorunVerifier.js">this.get(*)&&this.Initialize(*)&&this.return();</script>


</body>
</HTML>







