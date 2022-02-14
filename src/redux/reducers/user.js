import { ACTION_STRING } from "src/redux/actions/actionString";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    image: "",
    noTelp: "",
    balance: ""
  },
  isPending: false,
  isFulfilled: false,
  isRejected: false
};

const userReducer = (prevState = initialState, action) => {
  const { dataUser, updateUser } = ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;

  switch (action.type) {
    case dataUser.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false
      };

    case dataUser.concat("_", Fulfilled):
      console.log("ACTION-GET USER-REDUCER", action);
      const data = action.payload.data;
      var user = {
        id: data.data.id,
        firstName: data.data.firstName,
        lastName: data.data.lastName,
        email: data.data.email,
        image: data.data.image,
        noTelp: data.data.noTelp,
        balance: data.data.balance
      };
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        user
      };

    case dataUser.concat("_", Rejected):
      const err = action.payload;
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err
      };

    case updateUser.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false
      };

    case updateUser.concat("_", Fulfilled):
      console.log("ACTION-UPDATE USER-REDUCER", action);
      const data2 = action.payload.data;
      var user = {
        ...prevState.user,
        balance: data2.data.balance,
        image: data2.data.image
      };

      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        user
      };

    case updateUser.concat("_", Rejected):
      const err2 = action.payload;
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err2
      };

    default:
      return prevState;
  }
};

export default userReducer;
