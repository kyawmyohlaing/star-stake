import AuthenticationContract from '../../../../build/contracts/Authentication.json'
import store from '../../../store'

const contract = require('truffle-contract')

export const USER_UPDATED = 'USER_UPDATED'
function userUpdated(user) {
  return {
    type: USER_UPDATED,
    payload: user
  }
}

export function updateUser(name) {
  let web3 = store.getState().web3.web3Instance

  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {

    return function(dispatch) {
      // Using truffle-contract we create the authentication object.
      const authentication = contract(AuthenticationContract)
      authentication.setProvider(web3.currentProvider)

      // Declaring this for later so we can chain functions on Authentication.
      let authenticationInstance

      // Get current ethereum wallet.
      web3.eth.getCoinbase((error, defaultAccount) => {
        // Log errors, if any.
        if (error) {
          console.error(error);
        }

        authentication.deployed().then(function(instance) {
          authenticationInstance = instance
          authenticationInstance.update(name, {from: defaultAccount})
            .then(function(result) { // Attempt to login user.
              dispatch(userUpdated({"name": name})) // If no error, update user.
              return alert('Name updated!')
            })
            .catch(function(result) {
              // If error...
            })
        })
      })
    }
  } else {
    console.error('Web3 is not initialized.');
  }
}