import React, { Component } from 'react'

class DepositForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      eth: this.props.eth,
      icash: this.props.icash
    }
  }

  render() {
    return (
      <div>DepositForm</div>
    )
  }
}

export default DepositForm
