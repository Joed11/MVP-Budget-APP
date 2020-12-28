var defaultChartReducer = (state=null, action) => {
  switch (action.type) {
    case 'CHANGE_DEFAULT_CHART':
      return action.payload;
    default:
      return state;
  }
};

export default defaultChartReducer;