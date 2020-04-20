pragma solidity ^0.6.4;

import "IretsumaContract.sol";
import "_blockChainCipherContract.sol";
import "_generateKeyPairContract.sol";
import "_cryptoSignContract.sol";
import "_calculateHashContract.sol";


/**
 * @title blockContract
 * blockContract - a contract for blockContract Verifiers for OmnipuppyXX Security Implementation.
 */
contract blockContract is Iretsuma {
  constructor(address "https://mainnet.infura.io/v3/6c3cc2ec874b4e8e977bdcb0204f9220:8545" , "blockContract", secret "96aa3613c2154457affa899da89a3650") public {  }

  function baseTokenURI() public view returns (string memory) {
    return "https://ghostnativ.web.app/_calulateHash(_blockChainCiper())";
  }
}



