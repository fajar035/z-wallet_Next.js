import { ACTION_STRING } from "../actions/actionString";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  userData: {
    token: JSON.parse(localStorage["token"] || null)
  },
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  isLogout: false,
  err: {}
};

const authReducer = (prevState = initialState, action) => {
  const { authLogin, authLogout } = ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;

  switch (action.type) {
    // case logout
    case authLogout:
      localStorage.removeItem("token");
      var userData = {
        ...prevState.userData,
        token: null
      };
      return {
        ...prevState,
        isLogout: true,
        userData
      };

    // case authLogin + pending
    case authLogin.concat("_", Pending):
      return {
        isPending: true,
        isFulfilled: false,
        isRejected: false
      };

    // case authLogin + Fulfilled
    case authLogin.concat("_", Fulfilled):
      const data = action.payload.data;

      userData = {
        ...prevState.userData,
        token: data.result.token
      };

      return {
        ...prevState,
        isLogout: false,
        isRejected: false,
        isFulfilled: true,
        userData
      };

    // case authLogin + rejected
    case authLogin.concat("_", Rejected):
      const err = action.payload;

      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err
      };

    default:
      return prevState;
  }
};

export default authReducer;
