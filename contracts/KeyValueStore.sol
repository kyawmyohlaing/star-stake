pragma solidity ^0.4.18;

contract KeyValueStore {

  struct EntityStruct {
    uint entityData;
    bool isEntity;
  }

  mapping(address => EntityStruct) public entityStructs;
  address[] public entityList;

  function isEntity(address entityAddress) public constant returns(bool isIndeed) {
      return entityStructs[entityAddress].isEntity;
  }

  function getEntityCount() public constant returns(uint entityCount) {
    return entityList.length;
  }

  function newEntity(address entityAddress, uint entityData) public returns(uint rowNumber) {
    assert(!isEntity(entityAddress));
    entityStructs[entityAddress].entityData = entityData;
    entityStructs[entityAddress].isEntity = true;
    return entityList.push(entityAddress) - 1;
  }

  function updateEntity(address entityAddress, uint entityData) public returns(bool success) {
    assert(isEntity(entityAddress));
    entityStructs[entityAddress].entityData    = entityData;
    return true;
  }

}