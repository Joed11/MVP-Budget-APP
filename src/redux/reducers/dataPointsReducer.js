var dataPointsReducer = (state=null, action) => {
  switch (action.type) {
    case "CHANGE_DATA_POINTS":
      return action.payload;
    default:
      return state;
  }
};

export default dataPointsReducer;