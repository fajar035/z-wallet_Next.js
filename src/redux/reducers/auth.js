import { ACTION_STRING } from "src/redux/actions/actionString";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  authUser: {
    token: "",
    id: ""
  },

  isPending: false,
  isFulfilled: false,
  isRejected: false
};
const authReducer = (prevState = initialState, action) => {
  const { authLogin, updatePin } = ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;
  switch (action.type) {
    case authLogin.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false
      };

    case authLogin.concat("_", Fulfilled):
      const data = action.payload.data;
      var authUser = {
        token: data.data.token,
        id: data.data.id
      };
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        authUser
      };

    case authLogin.concat("_", Rejected):
      var err = action.payload.response;

      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err
      };

    case updatePin.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false
      };

    case updatePin.concat("_", Fulfilled):
      console.log("ACTION-UPDATE PIN >>> ", action);
      var data = action.payload.data;
    // var authUser = {
    //   ...prevState.authUser,
    //   pin: data.data.pin
    // };
    // return {
    //   ...prevState,
    //   isPending: false,
    //   isFulfilled: true,
    //   authUser
    // };

    case updatePin.concat("_", Rejected):
      var err = action.payload;
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
