pragma solidity ^0.4.18;

contract Hashmap {

  mapping(uint256 => address) public queue;
  uint256 first = 1;
  uint256 last = 0;

  mapping(bytes32 => TierStruct) public tiers;

  struct TierStruct {
    uint id;
    uint discountRate; // out of 100
    bool isEntity;
  }
  
  // entropy argument will be sent as new Buffer(myString)
  function put(uint key, uint value) public {
    bytes32 a = bytes32(key);
    bytes32 entropy = bytes32(5);
    bytes32 hashedKey = keccak256(a,entropy); //takes in bytes32
    tiers[hashedKey].discountRate = value; 
    tiers[hashedKey].id = 3; 
  }

  function get(uint key) public constant returns (uint value) {
    bytes32 a = bytes32(key);
    bytes32 entropy = bytes32(5);
    bytes32 hashedKey = keccak256(a,entropy); //takes in bytes32
    return tiers[hashedKey].discountRate;
  }

  

}
