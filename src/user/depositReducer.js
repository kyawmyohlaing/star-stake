const initialState = {
  data: {
    tx: "0x757d477cd278423ccc032b762fe749128533278f2b2efb1541cb351292b91298"
  }
}

const stakeReducer = (state = initialState, action) => {
  if (action.type === 'ADDRESS_STORED') {
    console.log('action.payload:',action.payload);
    const s =  {
      ...state,
      data: {
        tx: action.payload
      }
    };
    console.log('s:',s);
    return s;
  }
  

  return state
}

export default stakeReducer
