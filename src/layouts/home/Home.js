import React, { Component } from 'react'

class Home extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Star Stake: React DApp Tutorial Series</h1>
            <p>Use this wallet to send tokens for chips to participate in Starstake.</p>
            <h2>Smart Contract Authentication</h2>
            <p>DApp bootstrap version comes with authentication via a smart contract built-in.</p>
            <p>In the upper-right corner, you'll see a login button. Click it to login with with the Authentication smart contract. If there is no user information for the given address, you'll be redirected to sign up.</p>
            <h3>Ensure Metamask is installed</h3>
            <p>
             <a href="https://metamask.io" target="_blank">Get Metamask</a>. 
              MetaMask is an extension for accessing Ethereum enabled distributed applications, or "Dapps" in your normal Chrome browser!

              The extension injects the Ethereum web3 API into every website's javascript context, so that dapps can read from the blockchain.

              MetaMask also lets the user create and manage their own identities, so when a Dapp wants to perform a transaction and write to the blockchain, the user gets a secure interface to review the transaction, before approving or rejecting it.
            </p>
            <h3>Purchase Ethereum</h3>
            <p>The second step is to sign up for a <a href="https://www.coinbase.com/" target="_blank">Coinbase</a> account. This will give you a secure place to store your Ethereum, and easy payment methods to convert your local currency into or out of digital currencies. Your tokens wallet requires Ethereum to pay the small gas fees required for making transactions on the network.</p>
            <a href="https://www.coinbase.com/buy-ethereum?locale=en-US" target="_blank">Detailed Instructions</a>
            <h3>Debug Message Only</h3>
            <p>Once authenticated, any component can access the user's data by assigning the authData object to a component's props. There are two authenticated routes: "/dashboard", which displays the user's name once authenticated; and "/profile", which allows a user to update their name.<br/><code>{"// In component's render function."}<br/>{"const { authData } = this.props"}<br/><br/>{"// Use in component."}<br/>{"Hello { this.props.authData.name }!"}</code></p>
            
          </div>
        </div>
      </main>
    )
  }
}

export default Home
