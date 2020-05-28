const loggedReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        userName: action.payload,
        loggedIn: true,
      };
    case "LOG_OUT":
      return {
        user: {},
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default loggedReducer;
