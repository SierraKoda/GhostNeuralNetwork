pragma solidity ^0.6.4;

import "_blockContract.sol";
import "_blockChainCipherContract.sol";
import "_generateKeyPairContract.sol";
import "_cryptoSignContract.sol";
import "_calculateHashContract.sol";


/**
 * @title Iretsuma
 * Iretsuma - a contract for Iretsuma Verifiers for OmnipuppyXX Security Implementation.
 */
contract Iretsuma {
  constructor(address "https://mainnet.infura.io/v3/6c3cc2ec874b4e8e977bdcb0204f9220:8545" , "Iretsuma", secret "96aa3613c2154457affa899da89a3650") public {  }

  function baseTokenURI() public view returns (string memory) {
    return "https://ghostnativ.web.app/_calulateHash()";
  }
}



