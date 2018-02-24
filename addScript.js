var artifacts = require('./build/contracts/KeyValueStore.json') ;
var Web3 = require('Web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var KeyValueStore = web3.eth.contract(artifacts);

const accounts = [
  "0x6aa03Cc962C5D5C87cAb8b2dC521699067b82b9d",
  "0x6f46cf5569aefa1acc1009290c8e043747172d89",
  "0x90e63c3d53e0ea496845b7a03ec7548b70014a91",
  "0xab7c74abc0c4d48d1bdad5dcb26153fc8780f83e",
  "0x53d284357ec70ce289d6d64134dfac8e511c8a3d",
  "0xf4b51b14b9ee30dc37ec970b50a486f37686e2a8",
  "0xe853c56864a2ebe4576a807d26fdc4a0ada51919",
  "0x61edcdf5bb737adffe5043706e7c5bb1f1a56eea",
  "0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98",
  "0xf27daff52c38b2c373ad2b9392652ddf433303c4",
  "0x3d2e397f94e415d7773e72e44d5b5338a99e77d9",
  "0xb8487eed31cf5c559bf3f4edd166b949553d0d11",
  "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae",
  "0xdc870798b30f74a17c4a6dfc6fa33f5ff5cf5770",
  "0x1b3cb81e51011b549d78bf720b0d924ac763a7c2",
  "0x6f52730dba7b02beefcaf0d6998c9ae901ea04f9",
  "0x5ffc99b5b23c5ab8f463f6090342879c286a29be",
  "0xf1ce0a98efbfa3f8ebec2399847b7d88294a634e",
  "0x51f9c432a4e59ac86282d6adab4c2eb8919160eb"
];

let inst = KeyValueStore.at('0xf3631e2d9b38719d93d342ffc5d3e8839afeeb4d');

web3.eth.defaultAccount = web3.eth.accounts[0];

let structs = accounts.map((address, index) => {
  let struct = inst.entityStructs(address);
  return {
    entityData: Number(struct[0]),
    isEntity: Boolean(struct[1])
  };
});

// prevents error from being thrown at the end of execution
// https://github.com/trufflesuite/truffle-require/pull/14
module.exports = () => {
  console.log('entity structs:', structs)
};
