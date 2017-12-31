pragma solidity ^0.4.18;

contract SimpleStore {
  uint storedData;

  function set(uint x) {
    storedData = x;
  }

  function get() constant returns (uint retVal) {
    return storedData;  
  }
}
