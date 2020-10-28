var usernameReducer = (state=null, action) => {
  switch (action.type) {
    case "CHANGE_USERNAME":
      return action.payload;
    default:
      return state;
  }
};

export default usernameReducer;