import { connect } from 'react-redux'
import DepositForm from './DepositForm'
import { storeAddress, storeEntity } from './DepositFormActions'

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
    },
    onEntityButtonClick: (num) => {
      event.preventDefault();
      dispatch(storeEntity(num))
    }
  }
}

const DepositFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DepositForm)

export default DepositFormContainer
