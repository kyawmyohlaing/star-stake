import SimpleStoreContract from '../../../../build/contracts/SimpleStore.json'
import KeyValueStore from '../../../../build/contracts/KeyValueStore.json'
import store from '../../../store'

// this should be from store
import Accounts from 'web3-eth-accounts';

const contract = require('truffle-contract')

export const ADDRESS_STORED = 'ADDRESS_STORED';
function addressStored(tx) {
  return {
    type: ADDRESS_STORED,
    payload: tx
  }
}

export const ENTITY_STORED = 'ENTITY_STORED';
function entityStored(tx) {
  return {
    type: ENTITY_STORED,
    payload: tx
  }
}
     
export function createPublicKey() {
  //todo put this in some other section
  let accounts = new Accounts('ws://127.0.0.1:8545')
  let account = accounts.create('entrop');
  console.log('accounts:',account);
  return account.address;
}


export function storeEntity(entity) {
  let web3 = store.getState().web3.web3Instance;
  if (typeof web3 !== 'undefined') {
    return dispatch => {
      const keyValueStore = contract(KeyValueStore);
      keyValueStore.setProvider(web3.currentProvider);
      let hashmap; // now we can actually call this a hashmap

      web3.eth.getCoinbase((err, coinbase) => {
        if (err) { return console.log('err:',err);}

        keyValueStore.deployed()
          .then(inst => {
            hashmap = inst;
            let address = createPublicKey();
            console.log('address:',address);
            hashmap.newEntity(address, entity, {from: coinbase})
              .then(res => {
                console.log('res:',res);
                return res;
              })


          })
          .catch(err => {
            console.log('err:',err);
          })

      })


    }
  } else {
    console.log('web3 not initialized:');
  }
}

export function getEntity(address) {
  let web3 = store.getState().web3.web3Instance;
  if (typeof web3 !== 'undefined') {
    return dispatch => {
      const keyValueStore = contract(KeyValueStore);
      keyValueStore.setProvider(web3.currentProvider);
      let hashmap;  
      web3.eth.getCoinbase((err, coinbase) => {
        if (err) { return console.log('err:',err);}

        keyValueStore.deployed()
          .then(inst => {
            hashmap = inst;
            let entity = hashmap[address]
            console.log('entity:',entity);
            return entity;
          })

      })
      .catch(err => {
        console.log('err:',err);
      })
    }
  }
}

export function getEntityCount() {
  let web3 = store.getState().web3.web3Instance;
  if (typeof web3 !== 'undefined') {
    return dispatch => {
      const keyValueStore = contract(KeyValueStore);
      keyValueStore.setProvider(web3.currentProvider);
      let hashmap;  
      web3.eth.getCoinbase((err, coinbase) => {
        if (err) { return console.log('err:',err);}

        keyValueStore.deployed()
          .then(inst => {
            hashmap = inst;
            hashmap.getEntityCount()
              .then(function (res) {
                console.log('res:',res);
                return res;
              })
          })
          .catch(err => {
            console.log('err:',err);
          })

      })
      
    }
  }
}

export function getEntrySet() {

}

export function storeAddress(num) {
  let web3 = store.getState().web3.web3Instance;
  if (typeof web3 !== 'undefined') {
    return dispatch => {
      const simpleStore = contract(SimpleStoreContract);
      simpleStore.setProvider(web3.currentProvider);
      let simpleStoreInstance;

      web3.eth.getCoinbase((error, coinbase) => {
        if (error) {
          console.log('error:',error);
        }

        simpleStore.deployed()
          .then(function (instance) {
            simpleStoreInstance = instance;

            simpleStoreInstance.get({from: coinbase})
              .then( function (result) {
                console.log('result:',result.toNumber());
              })

            simpleStoreInstance.set(num, {from: coinbase})
              .then(function (result) {
                console.log('result:',result);
                const { tx } = result;
                console.log('tx:',tx);
                dispatch(addressStored(tx))

                simpleStoreInstance.get({from: coinbase})
                  .then(function (result) {
                    console.log('get() result:',result.toNumber());
                  })
              })
          })
          .catch(err => {
            console.log('err:',err);
          })
      }) 
    }
  } else {
    console.log('Web3 is not initialized');
  }
}

// promisified wrapper, returns default account
function getCoinbase(web3) {
  return new Promise((resolve, reject) => {
    web3.eth.getCoinbase((err,coinbase) => {
      if (err) { return reject(err); }
      return resolve(coinbase)
    })
  })
}