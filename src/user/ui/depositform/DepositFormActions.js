import SimpleStoreContract from '../../../../build/contracts/SimpleStore.json'
import store from '../../../store'
const contract = require('truffle-contract')

export const ADDRESS_STORED = 'ADDRESS_STORED';
function addressStored(tx) {
  return {
    type: ADDRESS_STORED,
    payload: tx
  }
}

export function storeAddress(num) {
  let web3 = store.getState().web3.web3Instance;

  if (typeof web3 !== 'undefined') {
    return function(dispatch) {
      const simpleStore = contract(SimpleStoreContract);
      simpleStore.setProvider(web3.currentProvider);
      let simpleStoreInstance;

      web3.eth.getCoinbase((error, coinbase) => {
        if (error) {
          console.error(error);
        }
        simpleStore.deployed().then(function (instance) {
        simpleStoreInstance = instance;
        simpleStoreInstance.set(num, {from: coinbase})
          .then(function (result) {
            console.log('result:',result);
            const { tx } = result;
            console.log('tx:',tx);
            dispatch(addressStored(tx))
          })
          .catch(function (err) {
            console.log('err:',err);
          })

      })
      })
      

              
    }
  }
} 