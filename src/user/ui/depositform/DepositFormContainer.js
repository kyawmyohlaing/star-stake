import { connect } from 'react-redux'
import DepositForm from './DepositForm'
import { storeAddress, storeEntity, getEntityCount, getKeys, getEntrySet } from './DepositFormActions'

const mapStateToProps = (state, ownProps) => {
  return {
    storedData: state.deposit.data.storedData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDepositFormSubmit: (num) => {
      dispatch(storeAddress(num))
    },
    onEntityButtonClick: (num) => {
      dispatch(storeEntity(num))
    },
    onCountButtonClick: () => {
      dispatch(getKeys());
    },
    onFetchButtonClick: () => {
      dispatch(getEntrySet())
    }
  }
}

const DepositFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DepositForm)

export default DepositFormContainer
