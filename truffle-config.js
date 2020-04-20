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
 *HDWalletProvider
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
    ropsten: {
      provider: () => new HDWalletProvider(
        mnemonic, "https://ropsten.infura.io/v3/6c3cc2ec874b4e8e977bdcb0204f9220"),
      network_id: '3'
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
  