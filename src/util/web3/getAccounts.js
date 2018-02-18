
import store from '../../store'
import Accounts from 'web3-eth-accounts';

export const ACCOUNTS_INITIALIZED = 'ACCOUNTS_INITIALIZED'
function accountsInitialized(results) {
  return {
    type: ACCOUNTS_INITIALIZED,
    payload: results
  }
}

let getAccounts = new Promise(function(resolve, reject) {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', function(dispatch) {
    var results
    var web3 = window.web3
    var accounts
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider's web socket connection to make accounts
      console.log('web3.currentProvider:',web3.currentProvider);
      accounts = new Accounts("ws://localhost:8545");
      results = { accounts }
      console.log('Injected web3 detected, using that providers web3');
    } else {
      accounts = new Accounts('ws://127.0.0.1:8545')
      results = { accounts }
      console.log('No web3 instance injected, using accounts from ganache web socket provider.'); 
    }
    resolve(store.dispatch(accountsInitialized(results)))
  })
})

export default getAccounts



  
