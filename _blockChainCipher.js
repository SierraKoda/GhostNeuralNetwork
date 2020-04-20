const _blockChainCipher = require('crypto');
const _blockChainCipher == new const class Blockchain() => {
 	
 	constructor(){
 		
 		this.chain = [this.createGenesisBlock(), this.createHMAC3(), this.datetime()];
 		
 		
 	}
 	
 	 this.createHMAC3(){
 		
 var crypto = require('crypto-js');
function encrypt(key, str) {
	
	var hmac = crypto.createHmac('sha512', key);
	var signed = hmac.update(new Buffer(str, 'utf-8')).digest('base64');
	
	console.log(${signed});
	
     }
     
 	};


 	
 	this.createGenesisBlock(){
 		
 		
 		return new Block(0, '01/21/2020', 'Genesis block', '0',  JSON.strigify(this.createHMAC3)).toString());
 		
 		
 		
 	};
 	
 	this.getLatestBlock(){
 			return this.chain[this.chain.length - 1];
 			 		
 	};
 	
  this.addBlock(newBlock()){
 		
 	
 		newBlock.previousHash = this.getLatestBlock().hash;
 		newBlock.hash = newBlock.calculateHash();
 		this.chain.push(newBlock);
let
 	 OmniPuppyXX_Coin.addBlock(new Block((1, '01/22/2020', (amount: 4), this.datetime, JSON.stringify(this.createHMAC3)).toString()));
 	 OmniPuppyXX_Coin.addBlock(new Block((2, '01/23/2020', (amount: 4), this.datetime, JSON.stringify(this.createHMAC3)).toString()));
 	 
 	OmniPuppyXX_Coin.addBlock(new Block((3, '01/24/2020', (amount: 4), this.datetime, JSON.stringify(this.createHMAC3)).toString()));
 	
 	OmniPuppyXX_Coin.addBlock(new Block((4, '01/25/2020', (amount: 4), this.datetime, JSON.stringify(this.createHMAC3)).toString()));
 	 OmniPuppyXX_Coin.addBlock(new Block((5, '01/26/2020', (amount: 4), this.datetime, JSON.stringify(this.createHMAC3)).toString()));
 	 
 	OmniPuppyXX_Coin.addBlock(new Block((6, '01/27/2020', (amount: 4), this.datetime, JSON.stringify(this.createHMAC3)).toString()));
  	
 		
   	}
   	
   	return * arguments;
};

module.exports = new _blockChainCipher();

_blockChainCipher().Initialize(this);
return module.exports('_blockChainCipher , _blockChainCipher.Blockchain');
 	
 	
 	
 		