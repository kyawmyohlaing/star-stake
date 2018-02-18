import { connect } from 'react-redux'
import DepositForm from './DepositForm'
import { storeAddress } from './DepositFormActions'

const mapStateToProps = (state, ownProps) => {
  return {
    storedData: state.deposit.data.storedData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDepositFormSubmit: (num) => {
      event.preventDefault();
      dispatch(storeAddress(num))
    }
  }
}

const DepositFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DepositForm)

export default DepositFormContainer
