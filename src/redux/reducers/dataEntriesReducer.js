var dataEntriesReducer = (state=null, action) => {
  switch (action.type) {
    case 'CHANGE_DATA_ENTRIES':
      return action.payload;
    default:
      return state;
  }
};

export default dataEntriesReducer;