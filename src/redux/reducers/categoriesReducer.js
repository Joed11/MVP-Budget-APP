var categoriesReducer = (state=null, action) => {
  switch (action.type) {
    case 'CHANGE_CATEGORIES':
      return action.payload;
    default:
      return state;
  }
};

export default categoriesReducer;