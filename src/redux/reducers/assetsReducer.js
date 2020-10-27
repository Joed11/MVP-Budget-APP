var assetsReducer = (state=null, action) => {
  switch (action.type) {
    case 'CHANGE_ASSETS':
      return action.payload;
    default:
      return state;
  }
};

export default assetsReducer;