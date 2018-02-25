var Web3 = require('Web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var artifacts = getABI();
var KeyValueStore = web3.eth.contract(artifacts);

const accounts = getAccounts();

// needs to be deployed using remix with ganache cli account 0
let inst = KeyValueStore.at('0x2ba8e04518b1fa03f865fdf58282ea478f1cce25');

web3.eth.defaultAccount = web3.eth.accounts[0];

let structs = accounts.map((address, index) => {
  if (!inst.isEntity(address)) {
    inst.newEntity(address, index + 1, { from: web3.eth.accounts[0], gas: 3300000 });
  }
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


function getABI() {
  return [{
    "constant": true,
    "inputs": [
      {
        "name": "entityAddress",
        "type": "address"
      }
    ],
    "name": "isEntity",
    "outputs": [
      {
        "name": "isIndeed",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getEntityCount",
    "outputs": [
      {
        "name": "entityCount",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "entityStructs",
    "outputs": [
      {
        "name": "entityData",
        "type": "uint256"
      },
      {
        "name": "isEntity",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "entityList",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "entityAddress",
        "type": "address"
      },
      {
        "name": "entityData",
        "type": "uint256"
      }
    ],
    "name": "newEntity",
    "outputs": [
      {
        "name": "rowNumber",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "entityAddress",
        "type": "address"
      },
      {
        "name": "entityData",
        "type": "uint256"
      }
    ],
    "name": "updateEntity",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }]
}

function getAccounts() {
  return [
    "0x81Edfbcc12Abb98A3660608Dd1B65105EF2F00E5",
    "0xa55E06E3C33D8e8d0AA654fB9b549dEC7D25F48A",
    "0xF3d43ce61Af1Bf1A0fF6741c96A0A6D1c61Bf0eb",
    "0x4e624BFb4594A8d93F8c44E52923c892D46dA194",
    "0x1Bfb63a4674Fb8002d1Ad04D7869A2bFc668fa68",
    "0x38d31a5C839fDcf1202FbB3a1347b4fea35c694D",
    "0x2cf84e962CF547c81b215bc8E0310846b661622d",
    "0x53e50202EB8D696bd1Ec96B0D8E9366E4D39b73A",
    "0xfDD788fe153422Cc0f58D73Bd7a309dC8eBD0106",
    "0xf2240a8AD2227Cf53E19EF4683B02C9f1d57E192",
    "0xfDA1CB989bA8846F9C0316459AfB134eDb40a7eC",
    "0x5f8568aD07413Eb409247eE2A31C33c0ce82f19d",
    "0x4534E0AA80e79178726C08425bDBEAE0C105192D",
    "0x4fca18B6c98012069Acda0452916F7191C64454f",
    "0x7C5459E100Efa55a7C62eFb4C850046eE300847f",
    "0xF43CfE143CBb2019d47848B38faeD25645dab1a8",
    "0x8ea3Ab594f8E920DF45D074e88BC4eC1b6De7Fb6",
    "0xae88907C9Ef739076Cc68E44376Dc0aD0E3Dd57F",
    "0x9c378eEd63eEe79D84903A5bBEB593273F05F2DA",
    "0x23e6C3f5eC4cAbEf2e8402B7B169757125c2D320"
  ];
}