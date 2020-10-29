var labelsReducer = (state=null, action) => {
  switch (action.type) {
    case 'CHANGE_LABELS':
      return action.payload;
    default:
      return state;
  }
};

export default labelsReducer;