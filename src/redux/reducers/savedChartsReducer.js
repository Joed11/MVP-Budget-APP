var savedChartsReducer = (state=null, action) => {
  switch (action.type) {
    case 'CHANGE_SAVED_CHARTS':
      return action.payload;
    default:
      return state;
  }
};

export default savedChartsReducer;