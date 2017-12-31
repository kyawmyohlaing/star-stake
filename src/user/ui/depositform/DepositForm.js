import React, { Component } from 'react'

class DepositForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num: this.props.num || 10,
      eth: this.props.eth,
      token: this.props.token
    }
  }

  onInputChange(event) {
    this.setState({ num: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onDepositFormSubmit(this.state.num)
  }

  render() {
    return (
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <input id="num" type="text" value={this.state.num} onChange={this.onInputChange.bind(this)} placeholder="Name" />
          
          <div>{this.props.num}</div>
          <button type="submit" className="pure-button pure-button-primary">Deposit Stake</button>
          
        </fieldset>
      </form>
    )
  }
}

export default DepositForm
