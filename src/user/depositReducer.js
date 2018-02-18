const initialState = {
  data: {
    tx: "0x0"
  }
}

const depositReducer = (state = initialState, action) => {
  if (action.type === 'ADDRESS_STORED') {
    return {
      ...state,
      data: {
        tx: action.payload
      }
    }
  }

  return state;
}

export default depositReducer;