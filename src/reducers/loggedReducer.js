const loggedReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        userName: action.payload,
        loggedIn: true,
      };
    case "LOG_OUT":
      return {
        ...state,
        user: {},
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default loggedReducer;
