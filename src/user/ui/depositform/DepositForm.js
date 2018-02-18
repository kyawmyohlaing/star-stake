import React, { Component } from 'react'
import { storeEnttiy, createPublicKey } from './DepositFormActions';
class DepositForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num: this.props.num || 10
    }

  }

  onInputChange(event) {
    this.setState({num: event.target.value })

  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onDepositFormSubmit(this.state.num)
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onEntityButtonClick(this.state.num);
  }

  render() {
    return (
      <div>
        <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
          <fieldset>
            <input id="num" type="number" value={this.state.num} onChange={this.onInputChange.bind(this)} placeholder="Num"/>

            <div>{this.props.num}</div>
            <button type="submit" className="pure-button pure-button-primary">Deposit Stake</button>
            
          </fieldset>
        </form>


        <button className="pure-button pure-button-primary" onClick={this.handleClick.bind(this)}>Things</button>

      </div>
      
      )
      
  }
}

export default DepositForm
