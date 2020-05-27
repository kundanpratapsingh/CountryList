export const isValid = (username) => {
  return {
    type: "SIGN_IN",
    payload: username,
  };
};
