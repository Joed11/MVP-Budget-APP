var xLabelsReducer = (state=null, action) => {
  switch (action.type) {
    case 'CHANGE_X_LABELS':
      return action.payload;
    default:
      return state;
  }
};

export default xLabelsReducer;